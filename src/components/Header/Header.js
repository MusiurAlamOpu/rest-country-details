import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav id="navBar">
                <div>
                    <a href={'#Home'}>Home</a>
                    <a href={'#About'}>About</a>
                    <a href={'#Contact'}>Contact</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;