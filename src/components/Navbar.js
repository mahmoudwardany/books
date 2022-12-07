import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css'
export default function Navbars() {
  const fav=useSelector(state =>state.fav.bookItem)

  return (
    <Navbar className='nav' collapseOnSelect expand="lg" bg="dark" variant="dark"fixed='top'>
    <Container>
      <Link to="/" className='navbar-brand '>React Books</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
        <Link to='/favorites' style={{paddingLeft: 13, textDecoration: 'none'}}>
<div className="bg-bar ">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-heart-fill color-black" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
<span className='quan text-center'>{fav.length}</span>
</div>
 </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
