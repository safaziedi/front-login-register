import {Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import About from './components/About';
import Todolist from './components/Todolist';
function App() {
  return (
    
    <div className="App">
     <Header /> 
     <div className='main'>
        <Routes>
          <Route   path="/"  element={ <Login /> }   />
          <Route   path="/login" element={ <Login /> }   />
          <Route   path="/register" element={ <Register /> }   />
          <Route   path="/about" element={ <About /> }   />
          <Route   path="/todolist" element={ <Todolist /> }   />
        </Routes> 
      </div>
    </div>
  );
}

export default App;
