import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

function Layout(props) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const Logout = async () => {
    try {
      await axios.delete('https://footwear-backend-985529487455.asia-southeast2.run.app/api/logout', { withCredentials: false });
      Cookies.remove('refreshToken');
      localStorage.removeItem('user');
      navigate('/')
    } catch (error) {
      console.error(error);
    }
  };

  const Login = async () => {
    navigate('/')
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand as={Link} to="/">Footwear Haven</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="align-items-center">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About us</Nav.Link>
            <Nav.Link as={Link} to="/Product">Product</Nav.Link>
          </Nav>
          <div className="flex items-center ms-auto gap-2">
            {!user ? (
              <button type="button" class="btn btn-outline-light" onClick={Login}>Login</button>
            ) : (
              <>
                <span className="text-white">Welcome,</span>
                <span className="bg-cyan-700 px-2 py-1 rounded text-white">{user.name}</span>
                <button
                  onClick={Logout}
                  className="px-4 py-1 btn btn-outline-light text-sm"
                >
                  Log Out
                </button>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Layout;
