import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import AddMovie from '../Functions/AddMovie';
import { Link } from 'react-router-dom';

function NavB({ newMovieData, setNewMovieData }) {
  return (
    <div className="NavB">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to="/">Netflix</Link> {/* Use Link to navigate to the Home page */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/about">About</Link> {/* Use Link to navigate to the About page */}
              <AddMovie setNewMovieData={setNewMovieData} newMovieData={newMovieData} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavB;
