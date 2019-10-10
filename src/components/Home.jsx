import React from 'react';
// import { Spring } from 'react-spring/renderprops'

import Carousel from './ControlledCarousel'




class Home extends React.Component {
  render() {
    return (
      <div className="Home">

        <Carousel />
        {/* <div className="menu-footer-container"></div> */}
      </div>
    )

  }
}



export default Home;