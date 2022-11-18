import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Partners extends Component {
    render() {
        return (
            <section id="partners-wrapper">
                <h2>Liste de nos partenaires :</h2>
                <p>Lorem Ipsum is simply dummy text of the fingerprinting and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting</p>
                <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true} stopOnHover={true} interval={5000} transitionTime={500} swipeScrollTolerance={5}>
                    <div>
                        <img src="./src/assets/img/partners/booking_logo.png" />
                    </div>
                    <div>
                        <img src="./src/assets/img/partners/leboncoin_logo.png" />
                    </div>
                    <div>
                        <img src="./src/assets/img/partners/airbnb_logo.png" />
                    </div>
                    <div>
                        <img src="./src/assets/img/partners/abritel_logo.png" />
                    </div>
                    <div>
                        <img src="./src/assets/img/partners/locasun_logo.png" />
                    </div>
                    <div>
                        <img src="./src/assets/img/partners/veepee_logo.png" />
                    </div>
                </Carousel>
            </section>
        );
    }
}

export default Partners
