import React from 'react';
import { Route } from 'react-router';

import App from '../components/App.js';
import Items from '../components/Items.jsx';
import Users from '../components/Users.jsx';

export default (
  <Route path="/" component={App}>
    <Route path="items" component={Items} />
    <Route path="users" component={Users} />
  </Route>
);