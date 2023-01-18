import logo from '../assets/logo-neg.svg'
import '../styles/Footer.css'

function Footer(){
    return <footer>
            <img src={logo} alt='logo-kasa' className='kasa-logo' />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
}

export default Footer