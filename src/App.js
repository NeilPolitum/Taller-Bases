import React from 'react';
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import './Css/App.css'
import Login from './Components/Login';
import Registrar from './Components/Registrar';
import Info from './Components/Info';

function App() {

  const estilo = {
    color: 'white'
  };

  return (
    <Router>
      <div>
        <nav>
          <ul className='enlaces'>
            <NavLink style={estilo} to="/"><li>LOGIN</li></NavLink>
            <NavLink style={estilo} to="/registrar"><li>REGISTRO</li></NavLink>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/registrar" exact element={<Registrar />} />
          <Route path="/info" exact element={<Info />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
