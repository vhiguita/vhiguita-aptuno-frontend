//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

const App = () =>{
  return (
    <>
      <BrowserRouter>
        <Switch>
         <Route exact path="/">
          <ItemListContainer/>
         </Route>
         <Route exact path="/item/:id">
          <ItemDetailContainer/>
         </Route>
        </Switch>
      </BrowserRouter>
    </>

  );
}

export default App;
