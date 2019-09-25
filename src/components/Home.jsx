import React from 'react';
import { Spring } from 'react-spring/renderprops'

import './Home.css'



function Home() {
  return (
    <>
      <Spring
        from={{ opacity: -0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
      >
        {props => (
          <div style={props}>
            <div className="home-wrap">
              <h1>Bourne Sweets</h1>
            </div>
          </div>
        )}

      </Spring>

    </>
  );
}


export default Home;