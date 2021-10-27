import React from "react";
import "./ItemCart.css";

const ItemCart = ({ data }) => {
  // </div>
  const handlerIncrement = () => {
    console.log("sacaste");
  };

  const handlerDecrement = () => {
    console.log("sacaste");
  };
  return (
    <div className="registroTabla">
      <p>{data.name}</p>
      <p>$ {data.price}</p>
      <p>{data.quantity}</p>
      <button onClick={handlerIncrement}>Agregar</button>
      <button onClick={handlerDecrement}>Quitar</button>
    </div>
  );
};

export default ItemCart;
