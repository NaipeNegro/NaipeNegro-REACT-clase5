import React, { useContext } from "react";
import { ItemsContext } from "../../ItemContext";
import ItemCart from "../../components/ItemCart/ItemCart";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const [items, setItems] = useContext(ItemsContext);

  return (
    <div className="carrito">
      <h1>Carrito</h1>
      {items.map((item) => {
        return <ItemCart data={item} key={item.id} />;
      })}
      <div>
        <Link className="Link" to="/">
          Seguir Comprando
        </Link>
        <a
          rel="noopener noreferrer"
          href="https://mpago.la/12yxv4v"
          target="_blank"
        >
          Terminar Compra
        </a>
      </div>
    </div>
  );
};

export default Cart;
