import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';

//import Menu from './containers/Menu/Menu'
import Layout from './containers/Layout/Layout';
import Page from './containers/Page/Page';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/:slugname" component={Page}/>
            <Route path="/" exact component={Page} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
