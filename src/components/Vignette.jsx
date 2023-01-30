import { Link } from "react-router-dom";

function Vignette({title, cover, id}) {
    return <Link to={'/logement/' + id}>
        <article className="" style={{backgroundImage:`url(${cover})`}}><p>{title}</p></article>
    </Link>
}

export default Vignette