import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [navExpanded, setNavExpanded] = useState(false);

    function toggleLightDark() {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <div className={"App " + (isDarkMode ? `dark-mode` : ``)}>
            <Header />
            <Navbar expanded={navExpanded} expand="sm" className="bg-body-primary">
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar-toggle" data-bs-theme="dark" onClick={() => setNavExpanded(!navExpanded)} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Link to={'/'} className="nav-link" onClick={() => setNavExpanded(false)}>
                                <span className="material-symbols-outlined">home</span>
                                <span className="nav-text">Home</span>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={'/resume'} className="nav-link" onClick={() => setNavExpanded(false)}>
                                <span className="material-symbols-outlined">description</span>
                                <span className="nav-text">Resume</span>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={'/portfolio'} className="nav-link" onClick={() => setNavExpanded(false)}>
                                <span className="material-symbols-outlined">wall_art</span>
                                <span className="nav-text">Portfolio</span>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={'/contact'} className="nav-link" onClick={() => setNavExpanded(false)}>
                                <span className="material-symbols-outlined">alternate_email</span>
                                <span className="nav-text">Contact</span>
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <button id="toggle-theme" className="toggle-button" onClick={toggleLightDark}>
                {
                    isDarkMode ? <span className="material-symbols-outlined">dark_mode</span>
                        : <span className="material-symbols-outlined">light_mode</span>
                }
            </button>
            <main>
                <Routes>
                    <Route path='*' element={<Home />} />
                    <Route exact path='/resume' element={<Resume />} />
                    <Route exact path='/portfolio' element={<Portfolio />} />
                    <Route exact path='/contact' element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
