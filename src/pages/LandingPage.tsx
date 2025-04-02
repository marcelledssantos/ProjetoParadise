
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <section className="landing">
    <h1>🌿 Paradise Nursery</h1>
    <p>Transforme sua casa com plantas incríveis!</p>
    <img src="/plant1.png" alt="Planta" width="200" />
    <br /><br />
    <Link to="/products"><button>Ver Produtos</button></Link>
  </section>
);

export default LandingPage;
