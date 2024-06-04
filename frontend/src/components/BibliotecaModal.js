import React, { useState, useEffect } from 'react';
import "../Styles/BibliotecaModal.css";

const BibliotecaModal = () => {
  const [archivos, setArchivos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [selectedFolder, setSelectedFolder] = useState(null);

  useEffect(() => {
    generarArchivosEjemplo();
  }, []);

  const generarArchivosEjemplo = () => {
    const nombres = ["Informatica", "Administracion", "Contabilidad", "Recursos Humanos"];
    const nuevosArchivos = nombres.map((nombre, index) => ({
      id: index + 1,
      nombre: nombre,
      descripcion: `Descripción del ${nombre}`,
      publicacion: `2023-05-0${index + 1}`,
    }));
    setArchivos(nuevosArchivos);
  };

  const filtrarArchivos = () => {
    return archivos.filter(archivo =>
      archivo.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  };

  const renderizarArchivos = () => {
    const archivosFiltrados = filtrarArchivos();
    return archivosFiltrados.map(archivo => (
      <div key={archivo.id} className="archivo">
        <p>{archivo.nombre}</p>
        <p>{archivo.descripcion}</p>
        <p>{archivo.publicacion}</p>
        <span 
          className="icono-carpeta"
          onClick={() => setSelectedFolder(archivo)}
        >
          📁
        </span>
      </div>
    ));
  };

  const renderizarContenidoCarpeta = () => {
    const archivosCarpeta = archivos.filter(archivo => archivo.nombre === selectedFolder.nombre);

    return (
      <div>
        {archivosCarpeta.map(archivo => (
          <div key={archivo.id} className="archivo">
            <p>{archivo.nombre}</p>
            <p>{archivo.descripcion}</p>
            <p>{archivo.publicacion}</p>
            <span className="icono-descarga">⬇️</span>
          </div>
        ))}
        <div className="botones">
          <button onClick={() => setSelectedFolder(null)}>Volver</button>
        </div>
      </div>
    );
  };

  return (
    <div className="contenedor-biblioteca">
      <div className="header">
        <h1 className="titulo">Biblioteca Digital</h1>
        {selectedFolder && (
          <h2 className="titulo-carpeta">{selectedFolder.nombre}</h2>
        )}
        <div className="filtro">
          <input
            type="text"
            placeholder="Buscar archivo..."
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
          />
          <button>Buscar</button>
        </div>
      </div>
      <div className="informacion-archivo">
        <span className="columna-titulo">Título</span>
        <span className="columna-descripcion">Descripción</span>
        <span className="columna-publicacion">Publicación</span>
      </div>
      <div className="lista-archivos">
        {archivos.length === 0 ? (
          <p>No hay archivos disponibles.</p>
        ) : (
          selectedFolder ? renderizarContenidoCarpeta() : renderizarArchivos()
        )}
      </div>
    </div>
  );
};

export default BibliotecaModal;
