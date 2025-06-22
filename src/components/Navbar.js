import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaSearch, FaArrowLeft } from 'react-icons/fa';
import SearchBar from './SearchBar';

export default function Navigationbar() {
  const [likedCount, setLikedCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const showSectionNavbar = [
    "/product/",
    "/category/",
    "/city/",
    "/sentiments/",
    "/flowers/",
    "/profile",
    "/help",
    "/submit-review",
    "/liked",
    "/cart",
    "/search",
  ].some((path) => location.pathname.startsWith(path));

  useEffect(() => {
    const user = localStorage.getItem('user');
  setIsLoggedIn(!!user); 
  
  const updateCounts = () => {
    const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setLikedCount(likedItems.length);
    setCartCount(cartItems.length);
  };

  window.addEventListener('cartUpdated', updateCounts);
  window.addEventListener('likedUpdated', updateCounts);

  // Also update on mount
  updateCounts();

  return () => {
    window.removeEventListener('cartUpdated', updateCounts);
    window.removeEventListener('likedUpdated', updateCounts);
  };
}, []);


  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
  if (trimmed) {
    navigate(`/search?search=${encodeURIComponent(trimmed)}`);
  }
};

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/images/logo.jpg"
            alt="La Rosa Logo"
            height="40"
            width="40"
            className="d-inline-block align-top rounded-circle"
            style={{ border: '1px solid #b9b6b7' }}
          />
          <span style={{ color: '#b9b6b7' }} className="ms-3 fw-bold">LA ROSA FLORALS</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center" style={{ color: '#b9b6b7' }}>
            
            {currentPath.startsWith('/shopping') && (
              <>
                <div className="d-flex align-items-center gap-4 ms-auto">
                    <div className="mx-2" style={{ width: '300px' }}>
    <SearchBar />
  </div>

                <Nav.Link as={Link} to="/liked">❤️ <span style={{ color: 'yellow' }}>{likedCount}</span></Nav.Link>
                <Nav.Link as={Link} to="/cart">🛒 <span style={{ color: 'yellow' }}>{cartCount}</span></Nav.Link>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                <Nav.Link as={Link} to="/help">Help</Nav.Link>
                 </div>
              </>
            )}

            {showSectionNavbar && (
              <div className="d-flex align-items-center gap-4 ms-auto me-3">
                <Form className="d-flex mx-2" style={{ width: '300px' }} onSubmit={handleSearch}>
                  <InputGroup className="mx-2" style={{ width: '300px' }}>
                    <InputGroup.Text><FaSearch /></InputGroup.Text>
                    <FormControl
                      type="search"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </InputGroup>
                </Form>
                <div className="mx-3 nav-icon" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
                  <FaArrowLeft style={{ marginRight: '5px' }} /> Back
                </div>
                <Nav.Link as={Link} to="/shopping">Shop</Nav.Link>
                {currentPath !== '/liked' && (
                  <Nav.Link as={Link} to="/liked">❤️ <span style={{ color: 'yellow' }}>{likedCount}</span></Nav.Link>
                )}
                {currentPath !== '/cart' && (
                  <Nav.Link as={Link} to="/cart">🛒 <span style={{ color: 'yellow' }}>{cartCount}</span></Nav.Link>
                )}
                {currentPath === '/profile'
                  ? <Nav.Link as={Link} to="/help">Help</Nav.Link>
                  : <Nav.Link as={Link} to="/profile">Profile</Nav.Link>}
              </div>
            )}

            {['/', '/login', '/register', '/about', '/contact', '/forgot-password'].includes(currentPath) && (
              <>
                {['/login', '/register', '/about', '/contact', '/forgot-password'].includes(currentPath) && (
                  <div className="mx-3 nav-icon" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
                    <FaArrowLeft style={{ marginRight: '5px' }} /> Back
                  </div>
                )}
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                {currentPath !== '/about' && <Nav.Link as={Link} to="/about">About</Nav.Link>}
                {currentPath !== '/contact' && <Nav.Link as={Link} to="/contact">Contact</Nav.Link>}
              </>
            )}

            {/* {!isLoggedIn &&
              !['/', '/shopping', '/login', '/register'].includes(currentPath) && (
                <>
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  <Nav.Link as={Link} to="/register">Register</Nav.Link> */}
                {/* </>
              )} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
