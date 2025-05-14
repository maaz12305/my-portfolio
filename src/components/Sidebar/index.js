import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/m-high-resolution-logo-transparent.png'
import LogoSubtitle from '../../assets/images/maaz-high-resolution-logo-white-transparent.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFolder, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src = {LogoS} alt="logo" />
            <img className="sub-logo" src = {LogoSubtitle} alt="Maaz" />
        </Link>
        <nav>
            <NavLink exact ="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact ="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
            </NavLink>
            <NavLink exact ="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact ="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target = "_black" 
                rel='noreferrer' 
                href="https://www.linkedin.com/in/maazbari1/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target = "_black" 
                rel='noreferrer' 
                href="https://github.com/maaz12305">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar