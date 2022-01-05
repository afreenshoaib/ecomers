import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import {Homepage} from './component/Homepage';
import ShopPage from './shop/ShopPage';


function App() {
  return (
    <div>
      <Homepage />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route  path='/shop' component={ShopPage}/>
      </Switch>


         </div>
  );
}

export default App;
