//animation AOS extension
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


export default function Team() {

    return (
        <section id="team-wrapper">
            <h2>Notre équipe :</h2>
            <img 
                src="./src/assets/img/hotenb/HOTENB_logo_black.png"
                alt="Photo de la team HôtenB"
            />
            <p>Lorem Ipsum is simply dummy text of the fingerprinting and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting</p>
        </section>
    )
}