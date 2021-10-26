import React from 'react'

import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import Logo from '../../assets/image/logoChico2.png';

import './NavBar.css';

// import { Link } from 'react-router-native';

const NavBar = () => {
    return (
        <div className="nav-conteiner" style={{alignItems:'center'}}>
            <Link className='Link' to='/'>
                <img src={Logo} alt="logo" />
            </Link>
            {/* <h1 className="nav-logo">
                LEGO
            </h1> */}
            <ul className="nav-list">
                <Link className='Link' to='/'>Home</Link>
                <Link className='Link' to='/about'>Nosotros</Link>
                <Link className='Link' to='/contact'>Contacto</Link>
            </ul>
            <Link className='Link' to='/cart'>
                <CartWidget/>
            </Link>
        </div>
    )
}

export default NavBar
