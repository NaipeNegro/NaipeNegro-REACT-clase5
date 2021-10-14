import React from 'react'

import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

import './NavBar.css';

// import { Link } from 'react-router-native';

const NavBar = () => {
    return (
        <div className="nav-conteiner">
            <h1 className="nav-logo">
                LEGO
            </h1>
            <ul className="nav-list">
                <Link className='Link' to='/'>Home</Link>
                <Link className='Link' to='/about'>Nosotros</Link>
                <Link className='Link' to='/contact'>Contacto</Link>

            </ul>
            <CartWidget/>

            
        </div>
    )
}

export default NavBar
