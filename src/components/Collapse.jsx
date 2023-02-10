import { useState } from "react";
import '../styles/Collapse.css';
import arrowDown from '../assets/arrow-down.svg';

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  return <div className="item">
        <div className="item-container">
        <div className="title">
            <h3>{props.title}</h3>
            <button className="btn-arrow" onClick={() => { setIsOpen(!isOpen)}}>
                <img className={isOpen ? 'arrow active' : 'arrow'} src={arrowDown} alt="ouvrir le contenu"></img>
            </button>
        </div>
        <div className={isOpen ? 'content show' : 'content'} style={isOpen ? {display:"block"} : {display: "none"}}>
                {props.equipements ? <ul>{
                    props.equipements.map((element, index)=>{
                        return <li className="kasa-collapse-li" key ={`${index}-${props.index}`}>{element}</li>
                    })
                }</ul>
                : <p className="kasa-apropos-p">{props.description}</p>}
        </div>
        </div>
    </div>
}


export default Collapse;
