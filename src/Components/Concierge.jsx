import { useState } from 'react'
//FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCirclePlus, faCircleMinus, faTabletScreenButton} from '@fortawesome/free-solid-svg-icons'
//animation AOS extension
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export default function Services(){
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
    };

    return (
        <section className="services-wrapper" id="concierge_wrapper">
            <h2>Nos services de conciergerie :</h2>
            <p>Lorem Ipsum is simply dummy text of the fingerprinting and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting</p>
            
            <div className='icons-services-concierge'>
                <div className="grid-cards">
                    <div className="card-service"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom">
                        <FontAwesomeIcon icon={faCoffee} />
                        <span>Gestion du ménage</span>
                    </div>
                    <div className="card-service"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom">
                        <FontAwesomeIcon icon={faCoffee} />
                        <span>Lavage du linge de maison</span>
                    </div>
                    <div className="card-service"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom">
                        <FontAwesomeIcon icon={faTabletScreenButton} />
                        <span>Fourniture des comsommables</span>
                    </div>
                </div>
            </div>
        {!isShown && (
            <div className='btn_services'>
                <FontAwesomeIcon icon={faCirclePlus} onClick={handleClick}/>
            </div>
        )}
        {/* {isShown && <MoreServices/>} */}
        {isShown && (
            <div className="more-services">  
                <div className='btn_services'>
                    <FontAwesomeIcon icon={faCircleMinus} onClick={handleClick}/>
                </div>     
                <div className="list-more-service">
                    <ul>
                        <li>Rédaction, diffusion et gestion de vos annonces sur les différentes plateformes</li>
                        <li>Multidiffusion et optimisation des offres (analyse, référencement, tarification stratégique, durée, visibilité...)</li>
                        <li>Prise de photographie haute qualité</li>
                        <li>Gestion des interventions du ménage entre chaque réservation</li>
                        <li>Lavage du linge de maison à haute température</li>
                        <li>Fourniture des consommables : essuie-tout, papier-toilette, produit vaisselle... et box de bienvenue</li>
                        <li>Communication tactique et messages automatisés avec vos locataires</li>
                        <li>Gestion et encaissement de vos réservations</li>
                        <li>Gestion du dépôt de garantie</li>
                        <li>Collecte de la taxe de séjour en vigueur au tarif voté</li>
                        <li>Check-in/Check-out : Accueil et/ou départ de vos voyageurs</li>
                        <li>Espace personnel propriétaire pour consulter vos réservations et statistiques. Il vous permettra d’obtenir une vue globale sur la performance de votre location au fil du temps</li>
                        <li>Relevés détaillés mensuel vous permettant de gérer la comptabilité de votre propriété sereinement</li>
                        <li>Assistance 7j/7 pour les voyageurs</li>
                        <li>25% HT de vos revenus courte durée reçus</li>
                    </ul>
                </div>                 
            </div>
        )}
        </section>
        
    );
}