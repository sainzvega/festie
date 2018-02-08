import React from 'react';
import logo from 'content/img/festie-logo.png';
import { Link } from 'react-router-dom';

const AppHeader = () => {
    return (
        <header>
            <Link to='/' title="FESTIE">
                <img src={logo} alt="FESTIE" />
            </Link>
        </header>
    );
};

export default AppHeader;