import React from "react";
import { Link } from 'gatsby';

import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import '../style/groups.css';

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
            <div className='info-brass-each'>
              <span>Day: Wednesday.&nbsp;</span>
              <span className='time'>Time: 4:45-5:45pm.&nbsp;</span>
              <span>Grade 3 and above.&nbsp;</span>
              <span>Invitation by Anne Higgs.</span>
            </div>
            <br />
            <p><strong>Training Band</strong></p>
            <div className='info-brass-each'>
              <span>Day: Wednesday.&nbsp;</span>
              <span>Time: 5:45-6:30pm.&nbsp;</span>
              <span>All Grades.&nbsp;</span>
              <span>Contact Anne Higgs for more information.</span>
            </div>
          </div>
        </div>

        <br />

        <div className='info-voice groups'>
          <h2>Choir</h2>
          <div className='info'>
            <p className='director'><strong>Led by Kate Lynch</strong></p>
            <p><strong>Senior Girls</strong></p>
            <div className='info-voice-each'>
              <span>Day: Tuesday</span>
              <span className='time'>Time: 5:00-5:45pm.&nbsp;</span>
              <span>Ages 12 and up.&nbsp;</span>
              <span>Contact Kate Lynch for further details.</span>
            </div>
            <br />
            <p><strong>The Lads</strong></p>
            <div className='info-voice-each'>
              <span>Day: Monday.&nbsp;</span>
              <span className='time'>Time: 6:00-6:45pm.&nbsp;</span>
              <span>Year 7 and up.&nbsp;</span>
              <span>Contact Kate Lynch for further details.</span>
            </div>
            <br />
            <p><strong>Juniors</strong></p>
            <div className='info-voice-each'>
              <span>Day: Tuesday.&nbsp;</span>
              <span className='time'>Time: 4:00-4:45pm.&nbsp;</span>
              <span>All ages.&nbsp;</span>
              <span>Contact Kate Lynch for further details.</span>
            </div>
          </div>
        </div>

        <br />

        <div className='info-strings groups'>
          <h2>Strings</h2>
          <div className='info'>
            <p className='director'><strong>Led by Jo Lewis</strong></p>
            <p><strong>String Ensemble</strong></p>
            <div className='info-strings-each'>
              <span>Day: Wednesday.&nbsp;</span>
              <span className='time'>Time: -pm.&nbsp;</span>
              <span>Ages.&nbsp;</span>
              <span>Contact Anne Higgs for more information.</span>
            </div>
            <br />
            <p><strong>Senior Ensemble</strong></p>
            <div className='info-strings-each'>
              <span>Day: Wednesday.&nbsp;</span>
              <span className='time'>Time: -pm.&nbsp;</span>
              <span>Ages .&nbsp;</span>
              <span>Contact Anne Higgs for more information.</span>
            </div>
          </div>
        </div>

        <br />

        <div className='info-percussion groups'>
          <h2>Percussion</h2>
          <div className='info'>
            <p className='director'><strong>Led by Giles Hicks</strong></p>
            <p><strong>Percussion</strong></p>
            <div className='info--each'>
              <span>Day: Thursday.&nbsp;</span>
              <span className='time'>Time: -pm.&nbsp;</span>
              <span>Ages .&nbsp;</span>
              <span>Contact Anne Higgs for more information.</span>
            </div>
          </div>
        </div>

      </div>

      <Footer />

    </div>
  )
}
