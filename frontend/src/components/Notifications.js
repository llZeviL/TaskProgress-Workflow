import React from 'react';
import "../Styles/Notifications.css";

const Notifications = () => {
  const notifications = [
    "Nueva tarea asignada: Revisar informe de ventas",
    "Tarea completada: Enviar correo electrónico a cliente X",
    "Nueva tarea asignada: Preparar presentación para reunión de equipo",
    "Reunión de equipo cancelada",
    "Tarea pendiente: Actualizar base de datos de clientes",
    "Nueva tarea asignada: Investigar nuevas herramientas de productividad",
    "Tarea completada: Realizar seguimiento de ventas del último trimestre",
    "Tarea urgente: Solucionar incidencia en el sistema de pagos",
    "Recordatorio: Cumpleaños de compañero de equipo",
    "Nueva tarea asignada: Revisar y corregir errores en el informe mensual",
    // Agrega más notificaciones según sea necesario
  ];

  

  return (
    <div className="contenedor-principal">
      <div className="contenedor-titulo">
        <h2 className='Titulo-Noti'>Notificaciones</h2>
      </div>
      <div className="contenedor-notificaciones">
        <ul className="notifications-list">
          {notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
