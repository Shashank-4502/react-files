import React from 'react'

function Header(){
    return (
        <header>
            <nav className="nav">
                <img src="images/react-logo.png" alt="React logo" width="40" />
                <ul  className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;