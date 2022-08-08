import './App.css';
import { useEffect, useState } from 'react';

import Home from "./components/Home"
import { Route, Switch } from 'react-router-dom';
import Customer from './components/Customer';

function App() {

  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('./data.json')
    .then(res => res.json())
    .then(res => setData(res))
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App">
      <div className="App-header">
        <h1 className='title'>Capital Empreendedor</h1>
        <Switch>
          <Route path="/customer/:user">
            <Customer userData={data}></Customer>
          </Route>
          <Route path="/">
            <Home userData ={data}/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;