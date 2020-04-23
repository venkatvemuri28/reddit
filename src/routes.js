import React, { useState } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './Components/Header/header';

import { Posts } from './Components/Posts/Posts';
import { List } from './Components/List/list';
import { PostDetails } from './Components/PostDetails/PostInfo';

export const Routes = () => {
  const [tab, setTab] = useState('popular');
  const [searchKey, setSearchKey] = useState('');

  return (
    <Router>
      <Header tab={tab} setTab={setTab} setSearchKey={setSearchKey} />
      <Route
        exact
        path='/'
        render={() => <List tab={tab} searchKey={searchKey} />}
      />
      <Route
        exact
        path='/r/*/comments/*'
        render={() => <PostDetails tab={tab} />}
      />
      <Route
        exact
        path='/r/*/'
        render={() => <Posts tab={tab} searchKey={searchKey} />}
      />
    </Router>
  );
};
