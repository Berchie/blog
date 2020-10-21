import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {Home} from './component/Home';
import {Login} from './component/Login';
import {CreatePost} from './component/CreatepPost';
import {Blog} from './component/Blog';
import { NavigationBar } from './component/NavigationBar';
import { Layout } from './stylecomponent/Layout';
import { Jumbotron} from './stylecomponent/Jumbotron';
import {ThemeProvider} from './stylecomponent/ThemeContext';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <React.Fragment>
      <ThemeProvider>
          <Router>
            <NavigationBar loggedIn = {loggedIn}/>
            <Jumbotron/>
              <Layout>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/Blog" component={Blog} />
                  <Route path="/CreatePost" component={CreatePost} />
                  <Route path="/Login">
                    <Login setLoggedIn = {setLoggedIn} />
                  </Route>
                  <Redirect to="/" />
                </Switch>
              </Layout>
          </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
