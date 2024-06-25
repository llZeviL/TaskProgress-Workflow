import React, { useEffect, useState } from 'react';
import '../Styles/Ticketlist.css'; // Importa el archivo de estilo CSS
import { Link } from 'react-router-dom';

function Ticketsuser() {
    const [tickets, setTickets] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchTickets() {
            const token = localStorage.getItem('token');
            const user = JSON.parse(localStorage.getItem('user'));
            const area = user?.area;
    
            try {
                const response = await fetch(`http://localhost:3000/api/tickets/filter?area=${area}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
    
                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.statusText}`);
                }
    
                const data = await response.json();
    
                if (Array.isArray(data)) {
                    setTickets(data);
                } else {
                    throw new Error('La respuesta de la API no es un array válido');
                }
            } catch (error) {
                console.error('Error al obtener los tickets:', error.message);
                setError(error.message); // Captura el error en el estado de error
            }
        }
    
        fetchTickets();
    }, []);
    

    if (error) {
        return <div>Error: {error}</div>; // Renderiza un mensaje de error si hay un problema
    }

    return (
        <div className="ticket-list-container">
            <h2>Lista de Tickets</h2>
            <table className="ticket-table">
                <thead>
                    <tr>
                        <th>Número de Solicitud</th>
                        <th>Nombre del Usuario</th>
                        <th>Fecha Ingreso</th>
                        <th>Empresa</th>
                        <th>Área</th>
                        <th>Motivo</th>
                        <th>Submotivo</th>
                        <th>Observación</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map(ticket => (
                        <tr key={ticket._id}>
                            <td>{ticket.numeroSolicitud}</td>
                            <td>{ticket.nombreUsuario}</td>
                            <td>{ticket.fechaIngreso}</td>
                            <td>{ticket.empresa}</td>
                            <td>{ticket.area}</td>
                            <td>{ticket.motivo}</td>
                            <td>{ticket.submotivo}</td>
                            <td>{ticket.observacion}</td>
                            <td>
                                <Link to={`/tickets/${ticket._id}`}>
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

export default Ticketsuser;
