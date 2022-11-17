import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookSquare  } from '@fortawesome/free-brands-svg-icons'

function Footer() {

    return (
    <footer id="footer-wrapper">
        <nav className="navigation-footer">
            <ul>
                <li>
                    <Link to="/mentions-legales">Mentions légales</Link>
                </li>
                <li>
                    <Link to="/donnees-personnelles">Données personnelles</Link>
                </li>
                <li>
                    <Link to="/cgu">CGU</Link>
                </li>
                <li>
                    <Link to="/contactez-nous">Contactez-nous</Link>
                </li>
            </ul>
        </nav>
        <div className="social_network_link">
            <a href="https://fr-fr.facebook.com/hotenb.france/" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} /></a>
            <a href="https://www.instagram.com/hotenb.village/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <p>© 2022 hotenb.com. Tous droits réservés.</p>
    </footer>
    )
}

export default Footer
