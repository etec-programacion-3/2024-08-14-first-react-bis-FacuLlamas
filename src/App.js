import React from 'react';
import './App.css';

function App() {
  return (
    <div className="landing-container">
      <header className="hero-section">
        <nav className="navbar">
          <div className="logo">Mi Marca</div>
          <ul className="nav-links">
            <li><a href="#about">Sobre Nosotros</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1>Bienvenido a Mi Marca</h1>
          <p>Ofrecemos las mejores soluciones para tu negocio.</p>
          <a href="#services" className="cta-button">Descubre Más</a>
        </div>
      </header>

      <section id="about" className="about-section">
        <h2>Sobre Nosotros</h2>
        <p>Somos una empresa líder en la industria con años de experiencia.</p>
      </section>

      <section id="services" className="services-section">
        <h2>Nuestros Servicios</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Servicio Uno</h3>
            <p>Descripción del servicio uno.</p>
          </div>
          <div className="card">
            <h3>Servicio Dos</h3>
            <p>Descripción del servicio dos.</p>
          </div>
          <div className="card">
            <h3>Servicio Tres</h3>
            <p>Descripción del servicio tres.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contáctanos</h2>
        <p>No dudes en comunicarte con nosotros en cualquier momento.</p>
        <a href="mailto:info@mimarca.com" className="contact-button">Envíanos un Correo</a>
      </section>

      <footer className="footer">
        <p>© 2024 MiMarca. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
