import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Hook para obtener los parámetros de la URL
import '../Styles/EditarUsuario.css';

function UserDatos() {
    const { id } = useParams(); // Obtiene el id del usuario desde la URL
    const [user, setUser] = useState({
        nombreUsuario: '',
        contrasena: '',
        correo: ''
    });

    useEffect(() => {
        async function fetchUser() {
            const token = localStorage.getItem('token'); // Obtén el token del almacenamiento local
            try {
                const response = await fetch(`http://localhost:3000/api/users/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}` // Incluye el token en el encabezado
                    }
                });
                const data = await response.json();
                setUser(data);
        
                // Convertir los encabezados de la respuesta a un objeto y mostrarlos en formato JSON
                const headersObj = {};
                for (const [key, value] of response.headers.entries()) {
                    headersObj[key] = value;
                }
                console.log(headersObj);
        
                console.log(response.headers.get('Authorization')); // Obtener un encabezado específico ('Authorization' en este caso)
            } catch (error) {
                console.error('Error al obtener los datos del usuario:', error);
            }
        }
        
        fetchUser();
        
    }, [id]);

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
            // Utiliza la id de la URL para completar el campo id en userData
            const userData = { ...user, id: id };
            const response = await fetch(`http://localhost:3000/api/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Incluye el token en el encabezado
                },
                body: JSON.stringify(userData) // Envía userData en lugar de user
            });
            if (response.ok) {
                alert('Datos actualizados correctamente');
            } else {
                alert('Error al actualizar los datos');
            }
        } catch (error) {
            console.error('Error al actualizar los datos del usuario:', error);
        }
    };
    
    return (
        <div className="form-solicitud">
            <div className="form-box-h3">
                <h3>Editar Datos del Usuario</h3>
            </div>
            <div className="form-box">
                <div className="form-box-order">
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

export default UserDatos;