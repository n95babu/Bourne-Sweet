import React from 'react';
// import { Spring } from 'react-spring/renderprops'
import './Home.css'
import Carousel from './ControlledCarousel'




class Home extends React.Component {
  render() {
    return (
      <div className="Home">

        <Carousel />

      </div>
    )

  }
}



export default Home;