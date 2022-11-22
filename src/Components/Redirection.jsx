import { Link } from "react-router-dom"

export default function Redirection (){
    return(
        <section id="redirection-wrapper" className="skewed">
            <div className="layer bottom">
                <div className="content-wrap">
                    <div className="content-body">
                        <Link to="/"><img src=".\src\assets\img\hotenb\test3\HOTENB_VILLAGE_logo_rond.png" alt="HôtenB Village"/></Link>
                        <p>Vous êtes locataire ?</p>
                    </div>
                </div>
            </div>
            <div className="layer top">
                <div className="content-wrap">
                    <div className="content-body">
                        <Link to="/"><img src=".\src\assets\img\hotenb\test3\HOTENB_logo_rond_deux.png" alt="HôtenB"/></Link>
                        <p>Vous êtes propriétaire ?</p>
                    </div>
                </div>
            </div>

            <div className="mobile-version">
                <div className="top-mobile">
                    <Link to="/"><img src=".\src\assets\img\hotenb\test1\HOTENB_logo_rond_deux.png" alt="HôtenB Village"/></Link>
                    <p>Vous êtes propriétaire ?</p>
                </div>
                <div className="bottom-mobile">
                    <Link to="/"><img src=".\src\assets\img\hotenb\test1\HOTENB_VILLAGE_logo_rond.png" alt="HôtenB Village"/></Link>
                    <p>Vous êtes locataire ?</p>
                </div>
            </div>

        </section>
    )
}