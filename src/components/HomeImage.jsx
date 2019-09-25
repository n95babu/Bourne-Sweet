import React from 'react'
import { Spring } from 'react-spring/renderprops'
import './Home.css'

export class HomeImage extends React.Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <img className='hero-img' src='https://i.imgur.com/bZM0Tsa.jpg' />
          </div>
        )}
      </Spring>
    );
  }
}
