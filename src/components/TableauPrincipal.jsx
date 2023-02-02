import immoList from '../data/data'
import Vignette from '../components/Vignette'
import "../styles/Annonce.css"

function TableauPrincipal(){
    return(
        <main className="kasa-annonce-container">
            {immoList.map((logement, index) => {
                return <Vignette key={logement.id} title={logement.title} cover={logement.cover} id={logement.id} index={index}></Vignette>
            })}
        </main>
    )
}

export default TableauPrincipal