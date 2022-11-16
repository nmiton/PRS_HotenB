import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Partners extends Component {
    render() {
        return (
            <section className="wrapper-partners">
                <h2>Liste de nos partenaires :</h2>
                <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true} stopOnHover={true} interval={5000} transitionTime={500} swipeScrollTolerance={5}>
                    <div>
                        <img src="./src/assets/img/partners/booking_logo.png" />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                        <img src="./src/assets/img/partners/leboncoin_logo.png" />
                        {/* <p className="legend">Legend 2</p> */}
                    </div>
                    <div>
                        <img src="./src/assets/img/partners/airbnb_logo.png" />
                        {/* <p className="legend">Legend 3</p> */}
                    </div>
                </Carousel>
            </section>
        );
    }
}

export default Partners
