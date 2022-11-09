import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/App.css';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const baseURL = "localhost:3080/empleado/"

  const [datos, setDatos] = useState({
    correo: '',
    clave: ''
  })

  const handleDatos = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault();
    
    axios.post(baseURL, {
      title: "Mandando datos",
      body: datos
    }).then((response) => console.log("correcto"));

    navigate('/info',{state:{correo: datos.correo}});
  }
  

  return (
    <form onSubmit={enviarDatos}>
      <div className='login'>
        <h1>Iniciar Sesión</h1>
        <input className='boton' type="text" placeholder='Correo' onChange={handleDatos} name="correo" />
        <input className='boton' type="password" placeholder='Contraseña' onChange={handleDatos} name="contrasena" />
        <button type="submit" className='boton'>Enviar</button>
      </div>
    </form>
  );
}

export default Login;
