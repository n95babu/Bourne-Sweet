import React from 'react';
// import { Spring } from 'react-spring/renderprops'
import './Home.css'
import Carousel from './ControlledCarousel'
import footer from './footer';




class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Carousel />
        <footer />
      </div>
    )

  }
}



export default Home;