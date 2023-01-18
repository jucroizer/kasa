import Banner from "../components/Banner";
import Footer from "../components/Footer";
import fond from "../assets/fondApropos.png";
import "../index.css";
import Collapse from "../components/Collapse";
import "../styles/Collapse.css";
import { useState } from "react";

function Propos() {

	const [isOpen, setIsOpen] = useState(null);

	const toggle = (i) => {
		if( isOpen === i ){
			return setIsOpen(null)
		}

		setIsOpen(i)
	}

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
        {propos.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h3>{item.theme}</h3>
			  <span>{isOpen === i ? '-' : '+'}</span>
            </div>
            <div className={isOpen === i ? 'content show' : 'content'}>{item.content}</div>
          </div>
        ))}
      </div>

      {/* <Collapse>
        <div>
          <p className="kasa-toggle-button-hidden">Fiabilité</p>
          <p className="kasa-apropos-paragraphe-hidden">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </div>
		</Collapse> */}
      <Footer />
    </div>
  );
}

const propos = [
  {
    theme: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  },
  {
    theme: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    theme: "Service",
    content:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    theme: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

export default Propos;
