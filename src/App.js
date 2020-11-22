import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Sub from './components/Sub'
import './App.css';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/sub" component={Sub} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
