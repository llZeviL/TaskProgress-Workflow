import React, { useState } from 'react';
import "../Styles/UserDatos.css";

function UserDatos() {
  const [profileImage, setProfileImage] = useState(null);

  const handleCambioImagen = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  const usuario = localStorage.getItem('usuario');
  const correo = localStorage.getItem('correo');

  return (
    <div className="profile-summary">
      {profileImage ? (
        <img src={URL.createObjectURL(profileImage)} alt="Foto de perfil" className="profile-summary img" />
      ) : (
        <img src="/images/Userpredeterminado.jpg" alt="Foto de perfil predeterminada" className="profile-summary img" />
      )}
      <input type="file" accept="image/*" onChange={handleCambioImagen} id="file-input" style={{ display: 'none' }} />
      <button onClick={() => document.getElementById('file-input').click()} className="upload-button">
        Cambiar foto de perfil
      </button>
      <h3>Nombre del usuario:{usuario} </h3>
      <p>Correo electrónico:{correo}</p>
      <p>Edad: 30 años</p>
    </div>
  );
}

export default UserDatos;
