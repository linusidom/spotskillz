import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <Navbar expand="lg" className='navHeader'>
      <Container>
        <Navbar.Brand href="#home">spot<span className='brandBold'>Skillz</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink as={Link} to="/">Home</NavLink>
            <NavLink as={Link} to="/selfpaced">Courses</NavLink>
            <NavLink as={Link} to="/curriculum">Curriculum</NavLink>
            <NavLink as={Link} to="/student">Student Section</NavLink>
            <NavLink as={Link} to="/contact">Contact Us</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}