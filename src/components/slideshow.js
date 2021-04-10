import React from "react"
import { Slide } from 'react-slideshow-image';

import "react-slideshow-image/dist/styles.css"

const slideImages = [
  require('../assets/testPic1.jpeg'),
  require('../assets/testPic2.jpeg'),
  require('../assets/testPic3.jpeg')
];

export default function Slideshow() {

  return (
    <div className='slide-container'>
      <Slide>
        <div className='each-slide'>
          <div style={{height: '25vw', width: '80vw', backgroundImage: `url(${slideImages[0]})` }}>
          {/* <img src={require('../assets/testPic1.jpeg')} style={{ width: '80vw' }}/> */}
            <span style={{ color: '#FFFFFF' }}>Slide 1</span>
          </div>
        </div>
        <div className='each-slide'>
          <div style={{height: '25vw', width: '80vw', backgroundImage: `url(${slideImages[1]})` }}>
            {/* <img src={require('../assets/testPic2.jpeg')} style={{ width: '80vw' }}/> */}
            <span style={{ color: '#FFFFFF' }}>Slide 2</span>
          </div>
        </div>
        <div className='each-slide'>
          <div style={{height: '25vw', width: '80vw', backgroundImage: `url(${slideImages[2]})` }}>
            {/* <img src={require('../assets/testPic3.jpeg')} style={{ width: '80vw' }}/> */}
            <span style={{ color: '#FFFFFF' }}>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  )

}
