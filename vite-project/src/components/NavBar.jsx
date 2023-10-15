import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <Link to="/" className="brand">Tlea.dev</Link>
                <nav>
                    <Link to="/">Home</Link>
                    {/* <Link to="/about">About</Link> */}
                    {/* <Link to="/services">Services</Link> */}
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
