import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Pour le style

function HomePage() {
  return (
    <div className="home-container">
      <h1>BIENVENU DANS LE MODULE GESTION DE COURS.</h1>
      <div className="button-container">
        <Link to="/FicheProfesseurs." className="home-button">Fiche de renseignement des professeurs.</Link>
        <Link to="/FicheHebdomadaire." className="home-button">Fiche de renseignement hebdomadaire.</Link>
      </div>
    </div>
  );
}

export default HomePage;
// const HomePage = () => {
//   return (
//     <div>HomePage</div>
//   )
// }

// export default HomePage