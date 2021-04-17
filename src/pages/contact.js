import React from "react";
import { Link } from 'gatsby';

import Slideshow from '../components/slideshow.js';
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
        <h1>Contact</h1>
        <p>For general enquiries, please contact Kate Lynch at </p>
      </div>

      <Footer />

    </div>
  )
}
