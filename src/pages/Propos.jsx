import Banner from "../components/Banner";
import Footer from "../components/Footer";
import fond from "../assets/fondApropos.png";
import '../index.css'

function Propos() {
  return (
    <div>
      <Banner />
      <div className="kasa-banner">
        <img className="kasa-banner-img" src={fond} alt="décoration de la page d accueil"></img>
      </div>
      <Footer />
    </div>
  );
}

export default Propos