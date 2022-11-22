import React, {useState} from 'react'

import {Navbar} from '../Components/Navbar/Navbar'
import {Sidebar} from '../Components/Sidebar/Sidebar'

const Header = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const [headerTransparent, setHeaderTranparent] = useState(true);
    const navBar = document.getElementById("navbar_header");
    const changeBackground = () => {
        if(window.scrollY != 1){
            // setHeaderTranparent(false)
            navBar.style.backgroundColor = "#2A2B2D"
        }else{
            // setHeaderTranparent(true)
            navBar.style.backgroundColor = "transparent"
        }
    }

    window.addEventListener("scroll",changeBackground)
    
    return(
        <header id='header-wrapper'>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
        </header>
    )
}


export default Header;
