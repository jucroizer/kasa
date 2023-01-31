import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import { useParams } from "react-router";
import immoList from "../data/data";
import { useState, useEffect } from "react";
import "../styles/Logement.css";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState();

  useEffect(() => {
    immoList.map((elem) => {
      if (elem.id === id) {
        console.log("je suis dans le if", elem);
        setLogement(elem);
        console.log(setLogement)
      }
    });
  });

  // console.log(logement)

  // console.log(logement.host.name)
  

  return (
    <div>
      <Banner />

      <div>

        <div className="kasa-logement-carousel">
          <Carousel content={logement.pictures} />
        </div>
        
        

        <div className="kasa-logement-infos">
          <div className="kasa-logement-title">
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>
          <div className="kasa-logement-tags">{logement.tags}</div>
          </div>
          <div className="kasa-logement-rating">
            <div className="kasa-logement-host">
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt="proprietaire"></img>
            </div>
            <div className="kasa-logement-rate">
              <div>{logement.rating}</div>
            </div>
          </div>
        </div>

        <div className="kasa-logement-collapse">
          <Collapse title="Description" content={logement.description}/>
          <Collapse title="Equipement" content={logement.equipments}/>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Logement;
