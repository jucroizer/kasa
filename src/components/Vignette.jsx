import { Link } from "react-router-dom";
import "../styles/Annonce.css"

function Vignette({title, cover, id}) {
    return <Link className="kasa-logement-link" to={'/logement/' + id}>
        <article className="logement-item-cover" style={{backgroundImage:`url(${cover})`}}>
            <div className="cover-gradient"></div>
            <p className='logement-item-title'>{title}</p>
        </article>
    </Link>
}

export default Vignette