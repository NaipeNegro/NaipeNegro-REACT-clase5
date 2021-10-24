import React from "react";
import "./ItemCount.css";
import { Link } from "react-router-dom";

const ItemCount = () => {
    const [counter, setCounter] = React.useState(0);

    const [stock, setStock] = React.useState(10);

    const handlerIncrement = () => {

        if(counter<stock){
            
            setCounter(counter +1);

        }
        else{
            alert("No hay más stock")
        }
    }

    const handlerDecrement = () => {

        if(counter>0){
            
            setCounter(counter -1);
        }
        else{
            alert("No puede quitar más elementos.")
        }
    }

    const handlerCompra = () => {

        if(counter===0){
            
            alert("Tenés que agregar la cantidad deseada primero.")
        }
        else{
            alert(`Se enviaron ${counter} elementos al carrito.`)

        }
    }

    return (

        <div className="counter">
            <p id="contador">{counter}</p>
            <div>
                <button onClick={handlerIncrement}>Agregar</button>
                <button onClick={handlerDecrement}>Quitar</button>
            </div>
            <Link to={`/cart`}>

            <button onClick={handlerCompra}>Comprar</button>
            </Link>

        </div>

        
    );







};

export default ItemCount;