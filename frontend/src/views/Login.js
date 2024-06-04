import React, { useRef, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import '../Styles/FormLogin.css'; // Importa tu archivo de estilos CSS
import '../Styles/boton.css';

function Login() {
  const [usuarioValido, cambiarUsuarioValido] = useState(null);
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false); // Nuevo estado
  const [mostrarMensaje, cambiarMostrarMensaje] = useState(false); // Estado para controlar el mensaje de aviso
  const [mostrarMensajeUsuario, cambiarMostrarMensajeUsuario] = useState(false); // Estado para controlar el mensaje de usuario no válido

  const captcha = useRef(null);

  const onChange = () => {
    if (captcha.current.getValue()) {
      cambiarUsuarioValido(null);
    }
  }
  
  const submit = async (e) => {
    e.preventDefault();
  
    cambiarFormularioEnviado(true); // Marcar el formulario como enviado

    if (!captcha.current.getValue()) {
      cambiarUsuarioValido(false);
      cambiarMostrarMensaje(true);
      setTimeout(() => {
        cambiarMostrarMensaje(false);
      }, 10000); // Ocultar el mensaje después de 5 segundos
      return;
    }
    
    // Extrae el nombre de usuario y contraseña del formulario
    const nombreUsuario = e.target.elements.nombreUsuario.value;
    const contrasena = e.target.elements.contrasena.value;
   
    // Envía una solicitud POST al servidor Node.js
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombreUsuario, contrasena }),
      });
  
      const data = await response.json(); 
      if (data.success) {
        console.log('Inicio de sesión exitoso');
        cambiarUsuarioValido(true);
        // Almacenar el token en el almacenamiento local del navegador
        localStorage.setItem('token', data.token);
  
        window.location.href = '/'
  
      } else {
        console.log('Credenciales incorrectas');
        cambiarUsuarioValido(false);
        cambiarMostrarMensajeUsuario(true);
        setTimeout(() => {
          cambiarMostrarMensajeUsuario(false);
        }, 10000); 
      }
    } catch (error) {
      console.error('Error al enviar solicitud al servidor:', error);
    }
  }
  return (
    <div className="container">
      <div className="form-container">
        <h2>Iniciar Sesion</h2>
        <form onSubmit={submit}>
          <label>
            <input type="text" placeholder="Nombre de usuario" name= "nombreUsuario" autoComplete="off"/>
          </label>
          <label>
            <input type="password" placeholder="Contraseña" name="contrasena" />
          </label>

          <div> 
            <ReCAPTCHA
              ref={captcha}
              sitekey="6LevSKspAAAAAEkO1bS85IlnFZQuLV-WT9jmBD6t"
              onChange={onChange}
              className="custom-recaptcha" // Clase para aplicar estilos
            />
          </div>
          
          <div>
            <button type="submit" className='btn10' style={{ margin: "0 auto" }}>Iniciar sesión</button>
          </div>
          {mostrarMensaje && <div className="alerta-captcha"> Favor complete el Captcha.</div>}    
          {mostrarMensajeUsuario && <div className="error-mensaje">Usuario no válido</div>}     
        </form>
      </div>
    </div>
  );
}

export default Login;
