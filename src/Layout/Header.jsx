function Header() {

    return (
    <header id="header-wrapper">
        <a href="#" className="app_logo">
            <img src=".\src\assets\img\hotenb\HOTENB_logo_white.png" alt="Icône HôtenB"/>
        </a>
    
        <input className="app_navigation_toggle" type="checkbox" id="menu_btn"/>
        <label className="app_navigation_toggle_icon" htmlFor="menu_btn">
            <span className="navicon"></span>
        </label>
        <nav className="app_navigation">
            <ul>
                <li>
                    <a href="#services-wrapper">Nos services</a>
                </li>
                <li>
                    <a href="#">Estimez vos revenus</a>
                </li>
                <li>
                    <a href="#">Conciergerie</a>
                </li>
                <li>
                    <a href="#">Contactez-nous</a>
                </li>
                <li>
                    <a href="#">Connexion</a>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header
