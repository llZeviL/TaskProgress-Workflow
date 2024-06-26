import React, { useEffect, useState } from 'react';
import '../Styles/Ticketlist.css'; // Importa el archivo de estilo CSS
import { Link } from 'react-router-dom'; 

function TicketsList() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        async function fetchTickets() {
            const token = localStorage.getItem('token'); // Obtén el token del almacenamiento local
            try {
                const response = await fetch('http://localhost:3000/api/tickets', {
                    headers: {
                        'Authorization': `Bearer ${token}` // Incluye el token en el encabezado
                    }
                });
                const data = await response.json();
                console.log(data);
                // Asegúrate de que data es un array
                if (Array.isArray(data)) {
                    setTickets(data);
                } else {
                    console.error('La respuesta de la API no es un array:', data);
                }
            } catch (error) {
                console.error('Error al obtener los tickets:', error);
            }
        }
        fetchTickets();
    }, []);

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
                        <th>Accción</th>
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
                                <Link to={`/tickets/${ticket._id}`}> {/* Enlace a la vista del usuario */}
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

export default TicketsList;
