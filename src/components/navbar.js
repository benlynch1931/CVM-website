import React, { useLayoutEffect, useState } from "react";
import { Link } from 'gatsby';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

import '../../node_modules/jquery/dist/jquery.min.js'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../style/navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState([0, 0])

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  if (size[0] <= 710) {
    return (
      <div className='navbar'>
        <Button onClick={toggle} style={{ backgroundColor: '#008015', borderWidth: 0, position: 'relative' }}><span className='navbar-toggler-icon'></span></Button>
        {/*<Collapse isOpen={isOpen} style={{ position: 'absolute', left: 0, width: '80vw', top: '5vh', zIndex: 10 }}>*/}
        <Collapse isOpen={isOpen} style={{ left: 0, width: '80vw', zIndex: 10 }} className='collapse-dropdown'>
          <Card className='Card'>
            <CardBody className='CardBody'>
              <Link activeClassName='active-link' className='nav-link' activeStyle={{ color: '#FFFFFF' }} id='id_navbar_info' to='/phone/info '>Info</Link>
            </CardBody>
          </Card>
          <Card className='Card'>
            <CardBody className='CardBody'>
              <Link activeClassName='active-link' className='nav-link' activeStyle={{ color: '#FFFFFF' }} id='id_navbar_groups' to='/groups'>Groups</Link>
            </CardBody>
          </Card>
          <Card className='Card'>
            <CardBody className='CardBody'>
              <Link activeClassName='active-link' className='nav-link' activeStyle={{ color: '#FFFFFF' }} id='id_navbar_photos' to='/photos'>Photos</Link>
            </CardBody>
          </Card>
          <Card className='Card'>
            <CardBody className='CardBody'>
              <Link activeClassName='active-link' className='nav-link' activeStyle={{ color: '#FFFFFF' }} id='id_navbar_contact' to='/contact'>Contact</Link>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    )
  } else {
    return (
      <div className="navbar">
        <div className='inline'><Link className='nav-link' activeStyle={{ color: '#FFFFFF' }} activeClassName='active-link' to="/info" style={{ textDecoration: 'none', color: 'inherit' }} ><h2>Info</h2></Link></div>
        <div className='inline'><Link className='nav-link' activeStyle={{ color: '#FFFFFF' }} activeClassName='active-link' to="/groups" style={{ textDecoration: 'none', color: 'inherit' }}><h2>Groups</h2></Link></div>
        <div className='inline'><Link className='nav-link' activeStyle={{ color: '#FFFFFF' }} activeClassName='active-link' to="/photos" style={{ textDecoration: 'none', color: 'inherit' }}><h2>Photos</h2></Link></div>
        <div className='inline'><Link className='nav-link' activeStyle={{ color: '#FFFFFF' }} activeClassName='active-link' to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}><h2>Contact Us</h2></Link></div>
      </div>
    )
  }
}
