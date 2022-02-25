import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import HeaderComponent from './components/headerComponent';
import FooterComponent from './components/footerComponent';

const App = () => {
  return (
    <div>
      <HeaderComponent/>
    <div className="container">
    <Switch>
    <Route exact path = "/" component = {Login}/>
    <Route path="/log-in" component = {Login}/>
    <Route path = "/sign-up" component = {Signup}/>
     
     </Switch>
    </div>
    <FooterComponent/>
    </div>
  )
}

export default App
