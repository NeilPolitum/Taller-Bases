import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../Css/App.css'
import axios from 'axios';

function Registrar() {
  const navigate = useNavigate();
  const baseURL = "localhost:3080/empleado/registrar"

  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    tipo_documento: '',
    numero_documento: '',
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
        <h1>Registrar</h1>
        <input className='boton' type="text" placeholder='Nombre' onChange={handleDatos} name="nombre" />
        <input className='boton' type="text" placeholder='Apellido' onChange={handleDatos} name="apellido" />
        <select className='boton' onChange={handleDatos} name='tipo_documento'>
          <option disabled selected>Tipo Documento</option>
          <option value="CC">C.C.</option>
          <option value="NIT">NIT</option>
          <option value="CE">C.E.</option>
        </select>
        <input className='boton' type="text" placeholder="Numero Documento" onChange={handleDatos} name="numero_documento" />
        <input className='boton' type="text" placeholder='Correo' onChange={handleDatos} name="correo" />
        <input className='boton' type="password" placeholder='Contraseña' onChange={handleDatos} name="clave" />
        <button type="submit" className='boton'>Enviar</button>
      </div>
    </form>
  );
}

export default Registrar;
