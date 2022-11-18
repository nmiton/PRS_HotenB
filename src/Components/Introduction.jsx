//animation AOS extension
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function Introduction() {
    return (
        <section id="introduction_wrapper">
            <video id="background-video" autoPlay loop muted>
                <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4"/>
            </video>
            <div className="overlay"
                data-aos="fade-up"
                data-aos-duration="2000">
                <h1 className="span-intro">Votre logement est unique, nous en prenons soin.</h1>
            </div>
        </section>
    )
}

export default Introduction
