import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



class mainCarousel extends Component {
  render() {
    return (
      <div className="mainCarousel">
        <Carousel autoPlay>
          <div>
            <img src="https://images.unsplash.com/photo-1426869884541-df7117556757?ixlib=rb-1.2.1" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1426869884541-df7117556757?ixlib=rb-1.2.1" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1426869884541-df7117556757?ixlib=rb-1.2.1" />
          </div>
        </Carousel>
      </div>
    );
  }
};

export default mainCarousel;
