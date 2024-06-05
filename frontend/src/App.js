import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Ticket from './components/Ticket';
import Register from './views/Register';
import PrivateRoute from './components/Auth';
import PruebasNav from './views/PruebasNav';
import MesaAyuda from './views/MesaAyuda';
import Biblioteca from './views/Biblioteca';
import MiPerfil from './views/MiPerfil';
import MenuAdmin from './components/MenuAdmin.js'
import Usuarios from './components/Usuarios.js';
import TicketList from './components/Ticketlist.js';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/ticket" element={<Ticket/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/Perfil" element={<MiPerfil/>} />
          <Route path="/Inicio" element={<PruebasNav />} />
          <Route path="/register" element={<PrivateRoute component={Register} />} />
          <Route path="/MesaAyuda" element={<MesaAyuda/>} />
          <Route path="/BibliotecaDigital" element={<Biblioteca />} />
          <Route path="/MenuAdmin" element={<MenuAdmin/>} />
          <Route path="/Users" element={<Usuarios/>} />
          <Route path="/TicketList" element={<TicketList/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


