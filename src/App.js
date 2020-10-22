import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './component/Home';
import {Login} from './component/Login';
import {CreatePost} from './component/CreatepPost';
import {Blog} from './component/Blog';
import { NavigationBar } from './component/NavigationBar';
import { Layout } from './stylecomponent/Layout';
import { Jumbotron} from './stylecomponent/Jumbotron';
import {ThemeProvider} from './stylecomponent/ThemeContext';
import { Post } from './component/Post';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  // const darkTheme = useAppTheme();
  // const styleTheme = {
  //       backgroundColor: darkTheme ? "#fff" : "#333",
  //       color: darkTheme ? "#333" : "#fff"
  // }

  return (
    <ThemeProvider> 
      <div>
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
                  <Route path="/Post">
                    <Post />
                  </Route>
                  {/* <Redirect to="/" /> */}
                </Switch>
              </Layout>
          </Router>
        </div>
    </ThemeProvider>
  );
}

export default App;
