//FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faFileLines, faTabletScreenButton} from '@fortawesome/free-solid-svg-icons'
//animation AOS extension
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export default function Services(){
    return (
        <section id="services-wrapper">
            <h2>Nos services :</h2>
            <p>Lorem Ipsum is simply dummy text of the fingerprinting and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting</p>
            
            <div className='icons-services'>
                <div className="grid-cards">
                    <div className="card-service"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom">
                        <FontAwesomeIcon icon={faFileLines} />
                        <span>Rédaction / Diffussion des annonces</span>
                    </div>
                    <div className="card-service"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom">
                        <FontAwesomeIcon icon={faCamera} />   
                        <span>Prise de photographie haute qualité</span>
                    </div>
                    <div className="card-service"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom">
                        <FontAwesomeIcon icon={faTabletScreenButton} />
                        <span>Assistance 7j/7</span>
                    </div>
                    <div className="card-service"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom">
                        <FontAwesomeIcon icon={faTabletScreenButton} />
                        <span>Gestion du loyer et du dépot de garantie</span>
                    </div>
                    <div className="card-service"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom">
                        <FontAwesomeIcon icon={faTabletScreenButton} />
                        <span>Application propriétaire</span>
                    </div>
                </div>
            </div>
        </section>
    );
}