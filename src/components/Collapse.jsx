import { useState } from "react";
import '../styles/Collapse.css'

function Collapse({children}) {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
        <div>
            <div className="kasa-apropos">
                <button className="kasa-toggle-button" onClick={() => setIsOpen(false)}> {children} </button>
            </div>
            <div>
                <p className="kasa-apropos-paragraphe">{children}</p>
            </div>
        </div>
  ) : (
        <div className="kasa-apropos-closed">
            <button className="kasa-toggle-button" onClick={() => setIsOpen(true)}> {children} </button>
        </div>
  );
}

export default Collapse;


// className="kasa-toggle-button"
// className="kasa-apropos-paragraphe"