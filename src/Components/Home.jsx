import Introduction from '../Components/Introduction'
import Partners from '../Components/Partners'
import Service from '../Components/Services'
import Team from '../Components/Team'
import Numbers from '../Components/Numbers'
import News from '../Components/News'
import Notice from '../Components/Notice'

function Home(){
    return(
        <div className='home-wrapper'>
            <Introduction/>
            <Service/>
            <Partners/>
            <Team/>
            <News/>
            <Notice/>
            <Numbers/>
        </div>
    )
}


export default Home