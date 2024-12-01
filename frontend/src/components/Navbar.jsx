import React from 'react';

function Navbar() {
    return <nav className="navbar navbar-expand-lg bg-light px-4">
        <a className="navbar-brand fw-bold text-uppercase" href="/">Arfath Ahmed Syed</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item about-link">
                    <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item auth-link">
                    <a className="nav-link" href="/personal">Personal</a>
                </li>
                <li className="nav-item auth-link">
                    <a className="nav-link" href="/login">Sign In</a>
                </li>
                <li className="nav-item contact-link">
                    <a className="nav-link" href="/contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
}

export default Navbar;
