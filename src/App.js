import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home'
import React, { useContext } from 'react';
import { store } from './store';

let _d = (e) => { } 

export let d = (type, args = {}) => {
  _d({...args, type})
}

function App() {
  let { state, dispatch } = useContext(store)
  _d = dispatch;
  return (
    <div className="App">
      <Home state={state} />
    </div>
  );
}

export default App;