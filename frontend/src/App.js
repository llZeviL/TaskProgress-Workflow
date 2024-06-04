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

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/ticket" element={<Ticket/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/Perfil" element={<MiPerfil/>} />
          <Route path="/PruebasNav" element={<PruebasNav />} />
          <Route path="/register" element={<PrivateRoute component={Register} />} />
          <Route path="/MesaAyuda" element={<MesaAyuda/>} />
          <Route path="/BibliotecaDigital" element={<Biblioteca />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


