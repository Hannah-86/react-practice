import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import MemberIndex from './components/MemberIndex'
import MemberProfile from './components/MemberProfile'
import './App.css';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MemberIndex} />
          <Route exact path="/profile" component={MemberProfile} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
