import React from 'react';
import "../Styles/Footer.css";

const Footer = () => {
  const softwareVersion = '1.0.0'; 

  return (
    <footer className="footer">
      <div className="Contenido-izq">
        <img src="/images/logofooteer.png" alt="" className="company-logo" />
      </div>
      <div className="Contenido-Derecho">
        <span>Versión: {softwareVersion}</span>
      </div>
    </footer>
  );
};

export default Footer;
