import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from './image/logo.jpg'
const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    SkillShare
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="header me-auto">
                        <Link to='/courses'>Courses</Link>
                        <Link to='/faq'>FAQ</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </Nav>
                    <Nav>
                        <div className={darkMode ? "dark-mode" : "light-mode"}>
                            <div className="container">
                                <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
                                <div className="switch-checkbox">
                                    <label className="switch">
                                        <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                                        <span className="slider round"> </span>
                                    </label>
                                </div>
                                <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
                            </div>
                            <div>
                                <h4>{darkMode ? "Dark" : "Light"}</h4>
                            </div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;