import React from 'react';
import Navbar from '../components/Navbar';
import UserDatos from '../components/UserDatos';
import Footer from '../components/Footer';
import "../Styles/PruebasNav.css";
import SlideImages from '../components/SlideImages';
import Notifications from '../components/Notifications';
import NewsComponent from '../components/NewsComponents';

const newsData = [
  {
    day: '29',
    month: 'MAY',
    title: 'Título de la Noticia 1',
    description: 'Descripción breve de la noticia 1...'
  },
  {
    day: '01',
    month: 'JUN',
    title: 'Título de la Noticia 2',
    description: 'Descripción breve de la noticia 2...'
  },
  {
    day: '10',
    month: 'JUN',
    title: 'Título de la Noticia 3',
    description: 'Descripción breve de la noticia 3...'
  },
  {
    day: '19',
    month: 'JUN',
    title: 'Título de la Noticia 4',
    description: 'Descripción breve de la noticia 4...'
  }
  // Agrega más noticias según sea necesario
];



function PruebasNav() {

  return (
    <div>
      <Navbar/>
      <div className='contenido-principal'>
        <UserDatos/>
        <SlideImages/>
        <Notifications/>
      </div>
      <div className='Contenido-noticias'>
      <NewsComponent news={newsData} />
      </div>
      <Footer/>
    </div>
  );
}

export default PruebasNav;

