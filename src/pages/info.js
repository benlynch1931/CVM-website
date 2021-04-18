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
        <h1 style={{ textAlign: 'center' }}>Info</h1>
        <br />

        <div className='info-brass groups'>
          <h2>Brass</h2>
          <div className='info'>
            <p className='director'><strong>Led by Anne Higgs</strong></p>
            <p>
              Venue:
                    Corrick Centre,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Kings of Wessex Academy,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Station Road,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Cheddar,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    BS27 3AQ.
            </p>
            <p>
              Time: During Term-time. Every Wednesday, 4-6:30pm (see <Link to='/groups'>groups</Link> for specific time slots)
            </p>
          </div>
        </div>

        <br />
        <br />

        <div className='info-voice groups'>
          <h2>Choir</h2>
          <div className='info'>
            <p className='director'><strong>Led by Kate Lynch</strong></p>
            <p>
              Venue:
                    Drama Room,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Fairlands Middle School,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Mason's Way,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Cheddar,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    BS27 3PG.
            </p>
            <p>
              Time: During Term-time. Every Monday, 6:00-6:45pm. Every Tuesday, 4-5:45pm  (see <Link to='/groups'>groups</Link> for specific time slots)
            </p>
          </div>
        </div>

        <br />
        <br />

        <div className='info-strings groups'>
          <h2>Strings</h2>
          <div className='info'>
            <p className='director'><strong>Led by Jo Lewis</strong></p>
            <p>
              Venue:
                    Psychology Rooms,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Kings of Wessex Academy,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Station Road,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Cheddar,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    BS27 3AQ.
            </p>
            <p>
              Time: During Term-time. Every Wednesay, *** - ***pm (see <Link to='/groups'>groups</Link> for specific time slots)
            </p>
          </div>
        </div>

        <br />
        <br />

        <div className='info-percussion groups'>
          <h2>Percussion</h2>
          <div className='info'>
            <p className='director'><strong>Led by Giles Hicks</strong></p>
            <p>
              Venue:
                    Corrick Centre,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Kings of Wessex Academy,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Station Road,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Cheddar,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    BS27 3AQ.
            </p>
            <p>
              Time: During Term-time. Every *****, *** - ***pm (see <Link to='/groups'>groups</Link> for specific time slots)
            </p>
          </div>
        </div>

      </div>

      <Footer />

    </div>
  )
}
