import React, { useEffect, useState } from 'react';
import '../Styles/Ticketlist.css';
import { Link } from 'react-router-dom'; 

function NewsList() {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        async function fetchNoticias() {
            const token = localStorage.getItem('token'); // Obtén el token del almacenamiento local
            try {
                const response = await fetch('http://localhost:3000/api/noticias', {
                    headers: {
                        'Authorization': `Bearer ${token}` // Incluye el token en el encabezado
                    }
                });
                const data = await response.json();
                console.log(data);
                // Asegúrate de que data es un array
                if (Array.isArray(data)) {
                    setNoticias(data);
                } else {
                    console.error('La respuesta de la API no es un array:', data);
                }
            } catch (error) {
                console.error('Error al obtener las noticias:', error);
            }
        }
        fetchNoticias();
    }, []);

    return (
<div className="ticket-list-container">
    <h2>Lista de Noticias</h2>
    <Link to={`/Noticias`}> 
                <button className="register-button">Ver</button>
            </Link>
    <table className="ticket-table">
        <thead>
            <tr>
                <th>Título</th>
                <th>Descripción</th>
                <th>Fecha</th>
                <th>Acción</th>
            </tr>
        </thead>
        <tbody>
            {noticias.map(noticia => (
                <tr key={noticia._id}>
                    <td>{noticia.titulo}</td>
                    <td>{noticia.descripcion}</td>
                    <td>{new Date(noticia.fecha).toLocaleDateString()}</td>
                    <td>
                        <Link to={`/noticias/${noticia._id}`}>
                            <button>Ver Noticia</button>
                        </Link>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
);
}

export default NewsList;
