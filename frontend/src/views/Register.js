import '../Styles/Register.css';
import React from 'react';
import { Link } from 'react-router-dom';


function Register() {
  return (
    <div className="container">
      <div className="form-container">
        <h2>Registrarse</h2>
        <input type="text" placeholder="Nombre de usuario"/>
        <div>
        <button>Registrar</button>
        </div>
        
        <Link to="/login">Ir al inicio de sesión</Link>
      </div>
    </div>
  );
}

export default Register;
