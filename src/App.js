import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function toggleLightDark() {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <div className={"App " + (isDarkMode ? `dark-mode` : ``)}>
            <Header />
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapsible" aria-controls="navbarCollapsible" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapsible">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link" aria-current="page">
                                    <span className="material-symbols-outlined">home</span>
                                    <span className="nav-text">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/resume'} className="nav-link">
                                    <span className="material-symbols-outlined">description</span>
                                    <span className="nav-text">Resume</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/portfolio'} className="nav-link">
                                    <span className="material-symbols-outlined">wall_art</span>
                                    <span className="nav-text">Portfolio</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/contact'} className="nav-link">
                                    <span className="material-symbols-outlined">alternate_email</span>
                                    <span className="nav-text">Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <button className="toggle-button" onClick={toggleLightDark}>
                        {
                            isDarkMode ? <span className="material-symbols-outlined">dark_mode</span>
                                : <span className="material-symbols-outlined">light_mode</span>
                        }
                    </button>
                </div>
            </nav>
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
