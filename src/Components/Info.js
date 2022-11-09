import React, { useEffect } from 'react';
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
  }, []);
  

  return (
    <form onSubmit={enviarDatos}>
      <div className='login'>
        <h1>Registrar</h1>
        <input disabled className='boton' type="text" placeholder={datos.nombre} name="nombre" />
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

export default Info;
