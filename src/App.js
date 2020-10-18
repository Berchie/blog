import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './component/Home';
import {Login} from './component/Login';
import {CreatePost} from './component/CreatepPost';
import {Blog} from './component/Blog';
import { NavigationBar } from './component/NavigationBar';


function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Blog" component={Blog} />
          <Route path="/CreatePost" component={CreatePost} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
