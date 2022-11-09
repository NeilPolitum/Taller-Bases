import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Info() {
  const location = useLocation();
  const correo = location.state.correo;
  const baseURL = "localhost:3080/empleado/consultar/"
  
  const [datos, setDatos] = useState();

  useEffect(() => {
    axios.get(baseURL+correo).then((response) => {
      setDatos(response.data);
    });
    console.log(datos)
  }, [correo,datos]);
  

  return (
    <form>
      <div className='login'>
        <h1>Registrar</h1>
        <input disabled className='boton' type="text" placeholder={datos.nombre} name="nombre" />
        <input disabled className='boton' type="text" placeholder={datos.apellido} name="apellido" />
        <input disabled className='boton' type="text" placeholder={datos.tipo_documento} name="tipo_documento" />
        <input disabled className='boton' type="text" placeholder={datos.numero_documento} name="numero_documento" />
        <input disabled className='boton' type="text" placeholder={datos.correo} name="correo" />
      </div>
    </form>
  );
}

export default Info;
