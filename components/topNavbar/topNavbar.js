import React, {Fragment, useEffect, useState} from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap'

export default function TopNavbar() {
  const [navBar, setNavBar] = useState('top-bar-after')

   useEffect(function mount() {
      function onScroll() {
        if(window.scrollY > 100){
            setNavBar('top-bar-before')
        }else{
            setNavBar('top-bar-after')
        }
      }
      window.addEventListener("scroll", onScroll);
   }, []);

   return (
       <Fragment>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={navBar}>
             <Container>
                <Navbar.Brand href="#home" className="brand-title">Raysul kobir</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="navbar-nav">
                   <Nav className="me-auto"> </Nav>
                   <Nav>
                      <Nav.Link href="#deets">Home</Nav.Link>
                      <Nav.Link href="#deets">Service</Nav.Link>
                      <Nav.Link href="#deets">Course</Nav.Link>
                      <Nav.Link href="#deets">Portfolio</Nav.Link>
                      <Nav.Link href="#deets">Contact</Nav.Link>
                      <Nav.Link href="#deets">About</Nav.Link>
                   </Nav>
                </Navbar.Collapse>
             </Container>
          </Navbar>
       </Fragment>
   );
}

