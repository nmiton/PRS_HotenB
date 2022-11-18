import React, {useState} from 'react'

import Introduction from './Introduction'
import Partners from './Partners'
import Service from './Services'
import Team from './Team'
import Numbers from './Numbers'
import News from './News'
import Notice from './Notice'
import Concierge from './Concierge'

const Home = () => {

    return(
        <div id='home-wrapper'>
            <Introduction/>
            <Service/>
            <Concierge/>
            <Partners/>
            <Team/>
            <News/>
            <Notice/>
            <Numbers/>
        </div>
    )
}


export default Home;
