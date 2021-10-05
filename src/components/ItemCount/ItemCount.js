import React from "react";
import "./ItemCount.css";

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
            alert("No puede quitar más elementos")
        }

    }

    return (

        <div className="counter">
            <p id="contador">{counter}</p>
            <button onClick={handlerIncrement}>Agregar</button>
            <button onClick={handlerDecrement}>Quitar</button>

        </div>

        
    );







};

export default ItemCount;