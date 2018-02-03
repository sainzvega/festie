import React from 'react';
import logo from 'content/img/festie-logo.png';

const AppHeader = () => {
    return (
        <header>
            <a href="#" title="FESTIE">
                <img src={logo} alt="FESTIE" />
            </a>
        </header>
    );
};

export default AppHeader;