// import { useState, useEffect } from 'react'
import Banner from "../components/Banner";
// import LogementItem from "../components/Annonce";
import Footer from "../components/Footer";
// import immoList from "../data/data";
import TableauPrincipal from "../components/TableauPrincipal";
import fondAcceuil from "../assets/fondAcceuil.png";
import "../index.css";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <Banner />
      <div className="kasa-banner">
        <img
          className="kasa-banner-img"
          src={fondAcceuil}
          alt="décoration de la page d accueil"
        ></img>
        <h1 className="kasa-home-h1">Chez vous, partout et ailleurs</h1>
      </div>

      <TableauPrincipal />

      <Footer />
    </div>
  );
}

export default Home;
