import '../styles/Banner.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

function Banner() {

	return <header className='header'>
            <img src={logo} alt='logo-kasa' className='kasa-logo-header' />
            <nav className='kasa-navbar'>
                <Link className="navLink" to="/" >Accueil</Link>
                <Link className="navLink" to="/propos">A propos</Link>
            </nav>
        </header>
}

export default Banner