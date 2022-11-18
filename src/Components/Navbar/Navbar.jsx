import React from 'react'
import {FaBars} from 'react-icons/fa'
import { 
    Nav, 
    NavBarContainer, 
    NavLogo, 
    MobileIcon, 
    NavItem, 
    NavMenu, 
    NavLinks,
    NavBtnLink,
    NavBtn
} from './NavbarElements'


export const Navbar = ({toggle}) => {
    return (
        <Nav>
            <NavBarContainer>
                <NavLogo to='/'><img src=".\src\assets\img\hotenb\HOTENB_logo_white.png" alt="Icône HôtenB"/></NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="/nos-services">Nos services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/contactez-nous">Nous contacter</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/connexion">Se connecter</NavBtnLink>
                </NavBtn>
            </NavBarContainer>
        </Nav>
        
    )
}
