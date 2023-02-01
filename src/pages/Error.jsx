import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/Error.css";

function Error() {
  return (
    <div>
      <Banner />
      <div className="error-content">
        <h1 className="kasa-error-title">404</h1>
        <p className="kasa-error-para">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className="navLink kasa-error-link" to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
