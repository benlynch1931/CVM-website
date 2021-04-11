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

        <div className='info-brass groups'>
          <h2>Brass</h2>
          <div className='info'>
            <p>Led by Anne Higgs</p>
            <p>
              Venue:
                    Corrick Centre,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Kings of Wessex Academy,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Station Road,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Cheddar,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    BS27 3AQ.
            </p>
            <p>
              Time: During Term-time, Every Wednesday, 4-6:30pm (see <Link to='/groups'>groups</Link> for specific time slots)
            </p>
          </div>
        </div>

        <br />

        <div className='info-voice groups'>
          <h2>Choir</h2>
          <div className='info'>
            <p>Led by Kate Lynch</p>
            <p>
              Venue:
                    Drama Room,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Fairlands Middle School,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Mason's Way,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Cheddar,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    BS27 3PG.
            </p>
            <p>
              Time: During Term-time, Every Tuesday, 4-5:45pm (see <Link to='/groups'>groups</Link> for specific time slots)
            </p>
          </div>
        </div>

        <br />

        <div className='info-strings groups'>
          <h2>Strings</h2>
          <div className='info'>
            <p>Led by Jo Lewis</p>
            <p>
              Venue:
                    Psychology Rooms,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Kings of Wessex Academy,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Station Road,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Cheddar,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    BS27 3AQ.
            </p>
            <p>
              Time: During Term-time, Every Wednesay, *** - ***pm (see <Link to='/groups'>groups</Link> for specific time slots)
            </p>
          </div>
        </div>

        <br />

        <div className='info-percussion groups'>
          <h2>Perussion</h2>
          <div className='info'>
            <p>Led by Giles Hicks</p>
            <p>
              Venue:
                    Corrick Centre,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Kings of Wessex Academy,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Station Road,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Cheddar,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    BS27 3AQ.
            </p>
            <p>
              Time: During Term-time, Every *****, *** - ***pm (see <Link to='/groups'>groups</Link> for specific time slots)
            </p>
          </div>
        </div>

      </div>

      <Footer />

    </div>
  )
}
