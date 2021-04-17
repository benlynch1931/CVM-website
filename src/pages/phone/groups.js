import React from "react";
import { Link } from 'gatsby';

import Slideshow from '../../components/slideshow.js';
import Navbar from '../../components/navbar.js';
import Footer from '../../components/footer.js';
import '../../style/groups.css';

export default function Index() {



  return (
    <div className='page index'>

      <div className='logo'>
        <Link to='/' style={{ textDecoration: 'none' }}><h1>Cheddar Valley Music</h1></Link>
      </div>

      <Navbar />




      <div className="main-groups">
        <h1 style={{ textAlign: 'center' }}>Groups</h1>
        <br />

        <div className='info-brass groups'>
          <h2>Brass</h2>
          <div className='info'>
            <p className='director'><strong>Led by Anne Higgs</strong></p>
            <p><strong>Brass Band</strong></p>
            <p>
              Time: 4:45-5:45pm<br />
              <br />
              Grade 3 and above.<br />
              Invitation by Anne Higgs.
            </p>
            <p><strong>Training Band</strong></p>
            <p>
              Time: 5:45-6:30pm<br />
              <br />
              All Grades<br />
              Contact Anne Higgs for more information.
            </p>
          </div>
        </div>

        <br />

        <div className='info-voice groups'>
          <h2>Choir</h2>
          <div className='info'>
            <p className='director'><strong>Led by Kate Lynch</strong></p>
            <p><strong>Senior Girls</strong></p>
            <p>
              Time: 5:00-5:45pm<br />
              <br />
              Ages 12 and up<br />
              Contact Kate Lynch for further details.
            </p>
            <p><strong>The Lads</strong></p>
            <p>
              Time: 6:00-6:45pm<br />
              <br />
              Year 7 and up<br />
              Contact Kate Lynch for further details.
            </p>
            <p><strong>Juniors</strong></p>
            <p>
              Time: 4:00-4:45pm<br />
              <br />
              All ages<br />
              Contact Kate Lynch for further details.
            </p>
          </div>
        </div>

        <br />

        <div className='info-strings groups'>
          <h2>Strings</h2>
          <div className='info'>
            <p className='director'><strong>Led by Jo Lewis</strong></p>
            <p><strong>String Ensemble</strong></p>
            <p>
              Time: -pm<br />
              <br />
              Ages
            </p>
            <p><strong>Senior Ensemble</strong></p>
            <p>
              Time: -pm<br />
              <br />
              Ages . Contact Anne Higgs for more information
            </p>
          </div>
        </div>

        <br />

        <div className='info-percussion groups'>
          <h2>Percussion</h2>
          <div className='info'>
            <p className='director'><strong>Led by Giles Hicks</strong></p>
            <p><strong>Percussion</strong></p>
            <p>
              Time: -pm<br />
              <br />
              Ages . Contact Anne Higgs for more information
            </p>
          </div>
        </div>

      </div>

      <Footer />

    </div>
  )
}
