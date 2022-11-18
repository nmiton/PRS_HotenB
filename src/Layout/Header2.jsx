import React, {useState} from 'react'

import {Navbar} from '../Components/Navbar/Navbar'
import {Sidebar} from '../Components/Sidebar/Sidebar'

const Header = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return(
        <header id='header-wrapper'>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
        </header>
    )
}


export default Header;
