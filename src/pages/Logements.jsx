import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import { useParams } from "react-router";
import immoList from "../data/data";
import { useState } from "react";
import { useEffect } from "react";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState();

  useEffect(() => {
    immoList.map((elem) => {
      if (elem.id === id) {
        // console.log("je suis dans le if", elem);
        setLogement(elem);
      }
    });
  });

  return (
    <div>
      <Banner />

      <div>
        <Carousel />

        <div className="kasa-logement-infos">
          <div className="kasa-logement-title">
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
            <div className="kasa-logement-tags"></div>
          </div>
          <div className="kasa-logement-rating">
            <div className="kasa-logement-host">
              <p></p>
            </div>
            <div className="kasa-logement-rate"></div>
          </div>
        </div>

        <div className="kasa-logement-collapse">
          <Collapse />
          <Collapse />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Logement;
