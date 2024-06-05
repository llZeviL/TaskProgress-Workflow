import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faTasks, faBook, faClipboard } from '@fortawesome/free-solid-svg-icons';
import '../Styles/MenuAdmin.css';

const MenuAdmin = () => {
  return (
    <div className="menu-container">
      <Link to="/Users" className="menu-button">
        <FontAwesomeIcon icon={faUsers} className="menu-icon" />
        <span className="menu-text">Usuarios</span>
      </Link>
      <Link to="/TicketList" className="menu-button">
        <FontAwesomeIcon icon={faClipboard} className="menu-icon" />
        <span className="menu-text">Tareas</span>
      </Link>
      <Link to="/ruta3" className="menu-button">
        <FontAwesomeIcon icon={faBook} className="menu-icon" />
        <span className="menu-text">Biblioteca</span>
      </Link>
    </div>
  );
};

export default MenuAdmin;