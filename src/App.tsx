import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Register } from './components/Register';

function App() {
  return (
    <BrowserRouter>
     
    <Switch>
      <Route exact path="/" component={Register}/>
       
      <Route  component={Home} path="/Home"/>
        
    </Switch>
  </BrowserRouter>
  );
}

export default App;
