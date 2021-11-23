import React, { useContext } from "react";
import { ItemsContext } from "../../ItemContext";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logoChico2.png";

import "./NavBar.css";

// import { Link } from 'react-router-native';

const NavBar = () => {
  const [items, setItems] = useContext(ItemsContext);
  return (
    <div className="nav-conteiner" style={{ alignItems: "center", padding: "0px" }}>
      <Link className="Link" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      {/* <h1 className="nav-logo">
                LEGO
            </h1> */}
      <ul className="nav-list">
        <Link className="Link" to="/">
          Home
        </Link>
        <Link className="Link" to="/about">
          Nosotros
        </Link>
        <Link className="Link" to="/contact">
          Contacto
        </Link>
      </ul>
      <Link className="Link cartAndCount" to="/cart">
        <CartWidget />
        <h2 className='countCart'>Items : {items.length}</h2>
      </Link>
    </div>
  );
};

export default NavBar;
