import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la redirección
import '../Styles/UsuariosList.css';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('http://localhost:3000/api/users');
                const data = await response.json();
                console.log(data);
                // Asegúrate de que data es un array
                if (Array.isArray(data)) {
                    setUsers(data);
                } else {
                    console.error('La respuesta de la API no es un array:', data);
                }
            } catch (error) {
                console.error('Error al obtener los usuarios:', error);
            }
        }
        
        fetchUsers();
    }, []);

    return (
        <div className="user-list-container">
            <h2>Lista de Usuarios</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Nombre de usuario</th>
                        <th>Correo</th>
                        <th>Acción</th> {/* Columna para el botón */}
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.nombreUsuario}</td>
                            <td>{user.correo}</td>
                            <td>
                                <Link to={`/user/${user._id}`}> {/* Enlace a la vista del usuario */}
                                    <button className="view-user-button">Ver</button>
                                </Link>
                            </td>
                        </tr> 
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;
