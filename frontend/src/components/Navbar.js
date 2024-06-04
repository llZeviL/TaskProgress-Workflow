import React, { useRef } from "react";
import "../Styles/Navbar.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <div className="navbar-container">
            <div className="navbar-header">
                <h3>Task Progress</h3>
                <nav ref={navRef} className="navbar-nav">
                    <a href="/PruebasNav">Inicio</a>
                    <a href="/MesaAyuda">Mesa de ayuda</a>
                    <a href="/#">Recursos Humanos</a>
                    <a href="/BibliotecaDigital">Biblioteca digital</a>
                    <a href="/Perfil">Mi Perfil</a>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        x
                    </button>
                </nav>
                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                    Menú
                </button>
            </div>
        </div>
    );
}

export default Navbar;
