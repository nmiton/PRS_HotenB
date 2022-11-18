import React from 'react'
import { 
    CloseIcon, 
    Icon, 
    SidebarContainer, 
    SidebarLink, 
    SidebarWrapper, 
    SideBtnWrap, 
    SidebarRoute ,
    SidebarMenu,
    SidebarLogo
} from './SidebarElements'


export const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLogo to='/'><img src=".\src\assets\img\hotenb\HOTENB_logo_white.png" alt="Icône HôtenB"/></SidebarLogo>
                    <SidebarLink to="/nos-services">Nos services</SidebarLink>
                    <SidebarLink to="/contactez-nous">Nous contacter</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/connexion">Se connecter</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>      
    )
}
