import React from "react";
import { Link } from 'gatsby';

import Slideshow from '../components/slideshow.js';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import '../style/info.css';

export default function Index() {



  return (
    <div className='page index'>

      <div className='logo'>
        <Link to='/' style={{ textDecoration: 'none' }}><h1>Cheddar Valley Music</h1></Link>
      </div>

      <Navbar />




      <div className="main-info">

        <div className='info-brass groups'></div>

        <div className='info-voice groups'>
          <h2>Choir</h2>
          <div className='info'>
            <p>Led by Kate Lynch</p>
            <p>
              Venue:
                    Drama Room,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Fairlands Middle School,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Mason's Way,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Cheddar<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    BS27 3PG.
            </p>
            <p>
              Time: During Term-time, Every Tuesday, 4-5:45pm (see <Link to='/groups'>groups</Link> for specific time slots)
            </p>
          </div>
        </div>

        <div className='info-strings groups'></div>

        <div className='info-percussion groups'></div>

      </div>

      <Footer />

    </div>
  )
}
