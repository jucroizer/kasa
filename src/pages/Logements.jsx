import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import { useParams } from "react-router";
import immoList from "../data/data";
import { useState, useEffect } from "react";
import "../styles/Logement.css";
import StarRating from "../components/StarRating";
import { useNavigate } from 'react-router-dom';

function Logement() {
  const { id } = useParams();
  // const [logement, setLogement] = useState();
  const logement = immoList.find((logement) => 
    logement.id === id
  );

  console.log('je suis id', id)
  console.log(logement)


  const navigate = useNavigate();


  useEffect(() => {
    if (logement === undefined){
        navigate('/error');
      }
  });


  if(logement === undefined){
    return null;
  }


  return (
    <div>
      <Banner />

      <div>

        <div className="kasa-logement-carousel">
          <Carousel content={logement.pictures} />
        </div>

        <div className="kasa-logement-infos">
          <div className="kasa-logement-title">
          <h2 className="kasa-logement-h2">{logement.title}</h2>
          <p className="kasa-logement-location">{logement.location}</p>
          
          <div className="kasa-logement-tags">{logement.tags}</div>
          </div>
          <div className="kasa-logement-rating">
            <div className="kasa-logement-host">
              <p className="kasa-host-name">{logement.host.name}</p>
              <img className="kasa-host-img" src={logement.host.picture} alt="proprietaire"></img>
            </div>
            
                <StarRating rating={logement.rating}/>
            
          </div>
        </div>

        <div className="kasa-logement-collapse">
          <div className="kasa-collapse">
            <Collapse title="Description" description={logement.description}/>
          </div>
          <div className="kasa-collapse">
            <Collapse title="Equipement" equipements={logement.equipments}/>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Logement;
