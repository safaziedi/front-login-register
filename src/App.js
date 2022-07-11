import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import About from './components/About';
import Todolist from './components/Todolist';
import Home from './components/Home';
import useToken from './components/useToken';
function App() {
  const { token, setToken } = useToken();

 /*if(!token) {
    return <Login setToken={setToken} />
  }
 */

  return (
    
    <div className="App">
     <Header /> 
     <div className='main'>
        <Routes>
          <Route   path="/"  element={ <Home /> }   />
          <Route   path="/login" element={ <Login setToken={setToken} /> }   />
          <Route   path="/register" element={ <Register /> }   />
          <Route   path="/about" element={ <About /> }   />
          <Route   path="/todolist" element={ <Todolist /> }   />
        </Routes> 
      </div>
    </div>
  );
}

export default App;
