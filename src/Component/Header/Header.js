import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthPorvider } from '../../Context/AuthContext';
import './Header.css'
import logo from './image/logo.jpg';
import { FaUser } from 'react-icons/fa';
import { Image } from 'react-bootstrap';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const { user, logOut } = useContext(AuthPorvider);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error('error', error);
            })
    }
    return (
        <Navbar className='align-items-center justify-content-center' collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                        {user?.email ?
                        <Link><button onClick={handleLogOut} type="button" className="btn btn-primary btn-sm h-50">LogOut</button></Link>
                        :
                        <>
                        <> <Link to='/login'>Login</Link> </>
                        <> <Link to='/register'>Register</Link> </>
                        </>
                        }
                        <Nav.Link>
                        {user?.displayName}
                        </Nav.Link>
                        <Nav.Link>
                            {user?.photoURL ?
                            <Image style={{height:'40px'}} roundedCircle src ={user.photoURL}
                            ></Image>
                            :
                            <FaUser></FaUser>
                            }
                        </Nav.Link>
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