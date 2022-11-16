import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Introduction from './Components/Introduction'
import Partners from './Components/Partners'
import Service from './Components/Services'
import Team from './Components/Team'
import Numbers from './Components/Numbers'
import News from './Components/News'
import Notice from './Components/Notice'

import './App.css'
import './assets/css/style.min.css'

function App() {

  return (
    <div className="app-wrapper">
      <Header/>
      <Introduction/>
      <Service/>
      <Partners/>
      <Team/>
      <News/>
      <Notice/>
      <Numbers/>
      <Footer/>
    </div>
  )
}

export default App
