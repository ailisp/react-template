import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home'
import { Page1 } from './pages/Page1'
import React, { useContext, useEffect } from 'react';
import { store } from './store';
import { Switch, Route } from 'react-router-dom'

let _d = (e) => { } 

export let d = (type, args = {}) => {
  _d({...args, type})
}

window.d = d

let routeTable = {
  '/': Home,
  '/page1': Page1
}

function App() {
  let { state, dispatch } = useContext(store)
  _d = dispatch;

  window.state = state
  
  let Page = routeTable[state.get('path')] || Home // or a 404 page
  return (
    <div className="App">
      <Page state={state} />
    </div>
  );
}

export default App;