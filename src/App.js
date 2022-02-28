import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import HeaderComponent from './components/headerComponent';
import FooterComponent from './components/footerComponent';
import netflix from '../src/img/netflixBackground.png'




const App = () => {
  return (
    <div style={{ backgroundImage: `url(${netflix})`}} className="babe" >
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
