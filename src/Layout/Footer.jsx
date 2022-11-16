import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookSquare  } from '@fortawesome/free-brands-svg-icons'

function Footer() {

    return (
    <footer className="wrapper-footer">
        <nav className="navigation-footer">
            <ul>
                <li>
                    <a href="#">Mentions légales</a>
                </li>
                <li>
                    <a href="#">Données personnelles</a>
                </li>
                <li>
                    <a href="#">CGU</a>
                </li>
                <li>
                    <a href="#">Contactez-nous</a>
                </li>
            </ul>
        </nav>
        <div className="social_network_link">
            <a href="#"><FontAwesomeIcon icon={faFacebookSquare} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <p>© 2022 hotenb.com. Tous droits réservés.</p>
    </footer>
    )
}

export default Footer
