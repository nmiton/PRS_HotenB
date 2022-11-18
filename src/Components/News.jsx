import { Carousel } from 'react-responsive-carousel';

function News() {
    return (
        <section id="news-wrapper">
            <h2>Nos actualités :</h2>
            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true} stopOnHover={true} interval={10000} transitionTime={500} swipeScrollTolerance={5}>
                <div className="container">
                    <img 
                        src="./src/assets/img/hotenb/HOTENB_logo_white.png"
                        alt="Photo de la team HôtenB"
                        className="swing-in-top-fwd"
                    />
                    <p>Actu 1 : Lorem Ipsum is simply dummy text of the fingerprinting and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting</p>
                </div>
                <div className="container">
                    <img 
                        src="./src/assets/img/hotenb/HOTENB_logo_white.png"
                        alt="Photo de la team HôtenB"
                        className="swing-in-top-fwd"
                    />
                    <p>Actu 2 : Lorem Ipsum is simply dummy text of the fingerprinting and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting</p>
                </div>
                <div className="container">
                    <img 
                        src="./src/assets/img/hotenb/HOTENB_logo_white.png"
                        alt="Photo de la team HôtenB"
                        className="swing-in-top-fwd"
                    />
                    <p>Actu 3 : Lorem Ipsum is simply dummy text of the fingerprinting and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting</p>
                </div>
            </Carousel>
        </section>
    )
}

export default News
