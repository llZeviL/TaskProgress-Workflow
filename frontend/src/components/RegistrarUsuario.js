import React, { useState } from 'react';
import '../Styles/EditarUsuario.css';

function AgregarUsuario() {
    const [user, setUser] = useState({
        nombreUsuario: '',
        contrasena: '',
        correo: '',
        rol: '',
        area: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token'); // Obtén el token del almacenamiento local
        try {
            const response = await fetch('http://localhost:3000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Incluye el token en el encabezado
                },
                body: JSON.stringify(user) // Envía el nuevo usuario
            });
            if (response.ok) {
                alert('Usuario creado correctamente');
                // Reiniciar el formulario
                setUser({
                    nombreUsuario: '',
                    contrasena: '',
                    correo: '',
                    rol: '',
                    area: ''
                });
            } else {
                alert('Error al crear el usuario');
            }
        } catch (error) {
            console.error('Error al crear el usuario:', error);
        }
    };

    return (
        <div className="form-solicitud">
            <div className="form-box-h3">
                <h3>Agregar Nuevo Usuario</h3>
            </div>
            <div className="form-box">
                <div className="form-box-order1">
                    <div className="container-label-input">
                        <label className="label-box">Nombre de Usuario</label>
                        <input
                            className="input-box"
                            name="nombreUsuario"
                            value={user.nombreUsuario}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="container-label-input">
                        <label className="label-box">Correo Electrónico</label>
                        <input
                            className="input-box"
                            name="correo"
                            value={user.correo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="container-label-input">
                        <label className="label-box">Contraseña</label>
                        <input
                            className="input-box"
                            type="password"
                            name="contrasena"
                            value={user.contrasena}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="container-label-input">
                        <label className="label-box">Rol</label>
                        <input
                            className="input-box"
                            name="rol"
                            value={user.rol}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="container-label-input">
                        <label className="label-box">area</label>
                        <input
                            className="input-box"
                            name="area"
                            value={user.area}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="container-btn">
                    <button className="btn success" onClick={handleSubmit}>
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AgregarUsuario;
