import Banner from "../components/Banner";
import Footer from "../components/Footer";
import fond from "../assets/fondApropos.png";
import "../index.css";
import Collapse from "../components/Collapse";
import "../styles/Collapse.css";

function Propos() {
  return (
    <div>
      <Banner />

      <div className="kasa-banner">
        <img
          className="kasa-banner-img"
          src={fond}
          alt="décoration de la page d accueil"
        ></img>
      </div>

      <div className="kasa-apropos">
        <Collapse
          title={"Fiabilité"}
          content={
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          }
        />
        <Collapse
          title={"Respect"}
          content={
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          }
        />
        <Collapse
          title={"Service"}
          content={
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          }
        />
        <Collapse
          title={"Sécurité"}
          content={
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          }
        />
      </div>
	  
      <Footer />
    </div>
  );
}


export default Propos;
