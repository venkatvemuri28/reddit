import React, { useState } from 'react';
import './App.css';
import { Posts } from './Components/Posts/Posts';
import { List } from './Components/List/list';
import { Header } from './Components/Header/header';
import { PostDetails } from './Components/PostDetails/PostInfo';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [tab, setTab] = useState('popular');
  return (
    <div className='App'>
      <Router>
        <Header tab={tab} setTab={setTab} />
        <Route exact path='/' render={() => <List tab={tab} />} />
        <Route
          exact
          path='/r/*/comments/*'
          render={() => <PostDetails tab={tab} />}
        />
        <Route exact path='/r/*/' render={() => <Posts tab={tab} />} />
      </Router>
    </div>
  );
}

export default App;
