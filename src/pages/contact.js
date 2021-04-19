import React from "react";
import { Link } from 'gatsby';

import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import '../style/contact.css';

export default function Index() {



  return (
    <div className='page index'>

      <div className='logo'>
        <Link to='/' style={{ textDecoration: 'none' }}><h1>Cheddar Valley Music</h1></Link>
      </div>

      <Navbar />




      <div className="main-contact">
        <h1 style={{ textAlign: 'center' }}>Contact</h1>
        <br />

        <p>For general enquiries, please contact Anne Higgs at **Email@example.com**</p>

        <p><strong>Brass</strong></p>
        <p>Anne Higgs: **Email@example.com**</p>
        <br />
        <p><strong>Voice</strong></p>
        <p>Kate Lynch: **Email@example.com**</p>
        <br />
        <p><strong>Strings</strong></p>
        <p>Anne Higgs: **Email@example.com**</p>
        <br />
        <p><strong>Percussion</strong></p>
        <p>Anne Higgs: **Email@example.com**</p>
      </div>

      <Footer />

    </div>
  )
}
