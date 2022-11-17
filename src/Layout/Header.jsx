import { Link } from "react-router-dom";

export default function Header() {
    return (
    <header id="header-wrapper">
        <div href="#" className="app_logo">
            <Link to="/"><img src=".\src\assets\img\hotenb\HOTENB_logo_white.png" alt="Icône HôtenB"/></Link>
        </div>
    
        <input className="app_navigation_toggle" type="checkbox" id="menu_btn"/>
        <label className="app_navigation_toggle_icon" htmlFor="menu_btn">
            <span className="navicon"></span>
        </label>
        <nav className="app_navigation">
            <ul>
                <li>
                    <Link to="/nos-services">Nos services</Link>
                    {/* <a href="#services-wrapper">Nos services</a> */}
                </li>
                <li>
                    <a href="#">Estimez vos revenus</a>
                </li>
                <li>
                    <a href="#">Conciergerie</a>
                </li>
                <li>
                    <Link to="/contactez-nous">Contactez-nous</Link>
                </li>
                <li>
                    <a href="#">Connexion</a>
                </li>
            </ul>
        </nav>
    </header>
    )
}
