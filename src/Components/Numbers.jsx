import { useState } from "react"
import Incrementer from "./Increment"

function Numbers() {
    const [active,setActive] = useState(false)
    const [wasActived, setWasActived] = useState(false)

    const activeAnimation = () => {
        const numbers_section = document.getElementById("numbers_wrapper")
        let numbers_section_positionY = numbers_section.offsetTop
        let screen_size = screen.height;

        if(!wasActived){
            if(window.scrollY + screen_size > numbers_section_positionY){
                setActive(true)
                setWasActived(true)
            }else{
                setActive(false)
            }
        }
    }

    window.addEventListener("scroll",activeAnimation)

    return(
        <section id="numbers_wrapper" data-aos="fade-up">
            <h2>Quelques chiffres :</h2>
            <div className="container">
                <div className="card">
                    <span className="span_number">{active ? <Incrementer end="80"/> : '0'}</span>
                    <span className="span_label">Clients satisfaits</span>
                </div>
                <div className="card">
                    <span className="span_number">{active ? <Incrementer end="80"/> : '0'}</span>
                    <span className="span_label">Propiétés en location</span>
                </div>
                <div className="card">
                    <span className="span_number">{active ? <Incrementer end="80"/> : '0'}%</span>
                    <span className="span_label">Augmentations de réservations</span>
                </div>
            </div>
        </section>
    )
}

export default Numbers
