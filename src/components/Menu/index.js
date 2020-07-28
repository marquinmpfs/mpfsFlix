import React from 'react';
import Logo from '../../assets/Logo.png';

import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo" />
            </a>

            <a className="ButtonLink" href="/">
                Novo vídeo
            </a>
        </nav>
    );
}

export default Menu;