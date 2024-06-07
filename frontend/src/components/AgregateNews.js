import React, { useState } from 'react';
import '../Styles/AgregateNews.css'; // Importa tu archivo de estilos CSS

function AgregateNews({ onAgregarNoticia }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titulo.trim() !== '' && descripcion.trim() !== '' && fecha !== '') {
      const nuevaNoticia = {
        titulo: titulo.trim(),
        descripcion: descripcion.trim(),
        fecha: fecha,
      };
      onAgregarNoticia(nuevaNoticia);
      setTitulo('');
      setDescripcion('');
      setFecha('');
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

  return (
    <div className="agregar-noticia-container">
      <h2>Agregar Noticia</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container1">
          <h3>Titulo de la noticia</h3>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className="input-container2">
          <h3>Descripción</h3>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div className="input-container3">
          <h3>Fecha</h3>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="agregar-button">Agregar</button>
      </form>
    </div>
  );
}

export default AgregateNews;
