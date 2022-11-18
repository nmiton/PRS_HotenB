import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Components/Home'
import Contact from './Components/Contact'
import Services from "./Components/Services";
import Connection from "./Components/Connection";
import PersonalData from './Components/PersonalData'
import LegalNotices from './Components/LegalNotices'
import TermsOfUse from './Components/TermsOfUse'
import Header from './Layout/Header2'
import Footer from './Layout/Footer'


import ScrollToTop from "./Components/ScrollToTop";

import './App.css'
import './assets/css/style.min.css'


function App() {

  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Header/>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/nos-services">
            <Services/>
          </Route>
          <Route path="/contactez-nous">
            <Contact/>
          </Route>
          <Route path="/connexion">
            <Connection/>
          </Route>
          <Route path="/cgu">
            <TermsOfUse/>
          </Route>
          <Route path="/mentions-legales">
            <LegalNotices/>
          </Route>
          <Route path="/donnees-personnelles">
            <PersonalData/>
          </Route>
        </Switch>
        
        <Footer/>
      </div>
    </Router>
  )
}

export default App
