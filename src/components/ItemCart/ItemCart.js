import React from "react";
import "./ItemCart.css";

const ItemCart = ({ data }) => {
  // </div>
  const handlerIncrement = () => {
    console.log("agregaste", data.quantity);
    data.quantity = data.quantity+1
  };

  const handlerDecrement = () => {
    console.log("sacaste", data.quantity);
    data.quantity = data.quantity-1
  };

  const handlerDelete = () => {
    console.log("eliminaste", data.quantity);
    data.quantity = data.quantity=0
  };


  return (
    <div className="registroTabla">
      <p>{data.name}</p>
      <p>$ {data.price}</p>
      <p>{data.quantity}</p>
      <button onClick={handlerIncrement}>Agregar</button>
      <button onClick={handlerDecrement}>Sacar</button>
      <button onClick={handlerDelete}>Eliminar</button>
    </div>
  );
};

export default ItemCart;
