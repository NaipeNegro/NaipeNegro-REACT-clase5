import React, { useContext } from "react";
// import CartProvider from "../../CartContext";

import "./ItemCount.css";
import { Link } from "react-router-dom";
import { ItemsContext } from "../../ItemContext";

// import { set, ref, db } from "firebase/firestore";

const ItemCount = ({ data }) => {
  const cantidad = data.stock;

  const [items, setItems] = useContext(ItemsContext);

  const [counter, setCounter] = React.useState(0);
  const [stock, setStock] = React.useState(0);

  // setStock(cantidad);

  console.log("stock: ", stock)
  console.log("cantidad: ", cantidad)

  const handlerIncrement = () => {
    setStock(cantidad);
    if (counter < cantidad) {
      setCounter(counter + 1);
      console.log("stock: ", stock)
      console.log("cantidad: ", cantidad)



    } else {
      alert("No hay más stock");
      console.log("stock: ", stock)
      console.log("cantidad: ", cantidad)

    }
    // do {
    //   setStock(cantidad);
    //   setCounter(counter + 1);
      
    // } while (counter > stock);
  };

  const handlerDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("No puede quitar más elementos.");
    }
  };

  const handlerCompra = () => {
    if (counter === 0) {
      alert("Tenés que agregar la cantidad deseada primero.");
    } else {
      // setStock(stock-counter)
      // alert(`Quedan ${stock} elementos en stock.`)
      if (stock >= counter) {
        alert(`Se enviaron ${counter} elementos al carrito.`);
        setStock(stock - counter);
        // set(ref(db,'products/' + data.id), {
        //     stock: stock - counter
        // })
        setItems([
          ...items,
          {
            id: data.id,
            name: data.title,
            price: data.price,
            quantity: counter,
          },
        ]);
      } else {
        alert("No hay suficiente stock.");
      }
    }
  };

  return (
    <div className="counter">
      <p id="stock">Stock: {data.stock}</p>
      <p id="contador">Comprar: {counter}</p>

      <div>
        <button onClick={handlerIncrement}>Agregar</button>
        <button onClick={handlerDecrement}>Quitar</button>
      </div>
      <div>
        <button onClick={handlerCompra}>Comprar</button>
      </div>
      <div>
        <Link className="Link" to="/cart">
          Carrito
        </Link>
      </div>
      <div>
        <Link className="Link" to="/">
          Seguir Comprando
        </Link>
      </div>
    </div>
  );
};

export default ItemCount;
