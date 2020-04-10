import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './App';
import Blogs from './Blogs'
import GlogsPage from './Glogs/GlogsPage'
import {  BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

ReactDOM.render(
  <Router >
      <Switch>
    <Route exact path='/' component={Portfolio} />
    <Route exact path='/glogs' component={GlogsPage} />
    </Switch>
    </Router>,
  document.getElementById('root')
);