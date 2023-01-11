import '../styles.css/Banner.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

function Banner() {
	return <div>
            <img src={logo} alt='logo-kasa' className='kasa-logo' />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/propos">A propos</Link>
            </nav>
        </div>
}

export default Banner