import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Info() {
  const location = useLocation();
  const correo = location.state.correo;
  const baseURL = "http://localhost:3080/empleado/consultar/"
  
  const [datos, setDatos] = useState({});

  useEffect(() => {
    axios.get(baseURL+correo).then((response) => {
      setDatos(response.data);
    });
    console.log(datos)
  }, [correo]);
  
  return (
    <form>
      <div className='login'>
        <h1>Registrar</h1>
        <h3 className='boton'>{datos.nombre}</h3>
        <h3 className='boton'>{datos.apellido}</h3>
        <h3 className='boton'>{datos.tipo_documento}</h3>
        <h3 className='boton'>{datos.numero_documento}</h3>
        <h3 className='boton'>{datos.correo}</h3>
      </div>
    </form>
  );
}

export default Info;
