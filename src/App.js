import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import {Homepage} from './homepage/Homepage.js';
import ShopPage from './shop/ShopPage.js';
import Header from './header/Header';


function App() {
  return (
    <div>
      <Header/>
      
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route  path='/shop' component={ShopPage}/>
      </Switch>


         </div>
  );
}

export default App;
