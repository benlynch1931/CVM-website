import React from "react";
import { Link } from 'gatsby';

import Slideshow from '../../components/slideshow.js';
import Navbar from '../../components/navbar.js';
import Footer from '../../components/footer.js';
import '../../style/info.css';

export default function Index() {



  return (
    <div className='page index'>

      <div className='logo'>
        <Link to='/' style={{ textDecoration: 'none' }}><h1>Cheddar Valley Music</h1></Link>
      </div>

      <Navbar />




      <div className="main-info">
        <h1 style={{ textAlign: 'center' }}>Info</h1>
        <br />

        <div className='info-brass groups'>
          <h2>Brass</h2>
          <div className='info'>
            <p className='director'><strong>Led by Anne Higgs</strong></p>
            <p className='phone-size'>
              <i><u>Venue:</u></i><br />
                    Corrick Centre,<br />
                    Kings of Wessex Academy,<br />
                    Station Road,<br />
                    Cheddar,<br />
                    BS27 3AQ.
            </p>
            <p className='phone-size'>
              <i><u>Time:</u></i><br />
              During Term-time.<br />
              Every Wednesday, 4-6:30pm<br />
              (see <Link to='/groups'>groups</Link> for specific time slots)
            </p>
          </div>
        </div>

        <br />

        <div className='info-voice groups'>
          <h2>Choir</h2>
          <div className='info'>
            <p className='director'><strong>Led by Kate Lynch</strong></p>
            <p className='phone-size'>
              <i><u>Venue:</u></i><br />
                    Drama Room,<br />
                    Fairlands Middle School,<br />
                    Mason's Way,<br />
                    Cheddar,<br />
                    BS27 3PG.
            </p>
            <p className='phone-size'>
              <i><u>Time:</u></i><br />
              During Term-time. <br />
              Every Monday, 6:00-6:45pm. <br />
              Every Tuesday, 4-5:45pm<br />
              (see <Link to='/groups'>groups</Link> for specific time slots)
            </p>
          </div>
        </div>

        <br />

        <div className='info-strings groups'>
          <h2>Strings</h2>
          <div className='info'>
            <p className='director'><strong>Led by Jo Lewis</strong></p>
            <p className='phone-size'>
              <i><u>Venue:</u></i><br />
                    Psychology Rooms,<br />
                    Kings of Wessex Academy,<br />
                    Station Road,<br />
                    Cheddar,<br />
                    BS27 3AQ.
            </p>
            <p className='phone-size'>
              <i><u>Time:</u></i><br />
              During Term-time.<br />
              Every Wednesay, *** - ***pm<br />
              (see <Link to='/groups'>groups</Link> for specific time slots)
            </p>
          </div>
        </div>

        <br />

        <div className='info-percussion groups'>
          <h2>Percussion</h2>
          <div className='info'>
            <p className='director'><strong>Led by Giles Hicks</strong></p>
            <p className='phone-size'>
              <i><u>Venue:</u></i><br />
                    Corrick Centre,<br />
                    Kings of Wessex Academy,<br />
                    Station Road,<br />
                    Cheddar,<br />
                    BS27 3AQ.
            </p>
            <p className='phone-size'>
              <i><u>Time:</u></i><br />
              During Term-time.<br />
              Every *****, *** - ***pm<br />
              (see <Link to='/groups'>groups</Link> for specific time slots)
            </p>
          </div>
        </div>

      </div>

      <Footer />

    </div>
  )
}
