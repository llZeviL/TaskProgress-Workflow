import React from 'react';
import Navbar from '../components/Navbar';
import UserDatos from '../components/UserDatos';
import Footer from '../components/Footer';





function MiPerfil() {

  return (
    <div>
      <Navbar/>
      <div>
        <UserDatos/>
      </div>
      <Footer/>
    </div>
  );
}

export default MiPerfil;

