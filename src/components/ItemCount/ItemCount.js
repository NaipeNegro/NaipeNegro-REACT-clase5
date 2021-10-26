import React, { useContext } from "react";
import CartProvider from "../../CartContext";

import "./ItemCount.css";
import { Link } from "react-router-dom";
import { ItemsContext } from "../../ItemContext";

const ItemCount = () => {
    const [items, setItems] = useContext(ItemsContext)

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
            alert(`Quedan ${stock} elementos en stock.`)
            if(stock>=counter){
                alert(`Se enviaron ${counter} elementos al carrito.`)
                setStock(stock-counter)
                setItems([
                    {id: 45454, name: 'Sony', price: 20},
                    {id: 45555, name: 'Asus', price: 20400}
                ]

                )
            }
            else{
                alert("No hay suficiente stock.")
            } 

        }
    }

    return (
        <div className="counter">
            <p id="contador">{counter}</p>
            <div>
                <button onClick={handlerIncrement}>Agregar</button>
                <button onClick={handlerDecrement}>Quitar</button>
            </div>
            <div>
                <button onClick={handlerCompra}>Comprar</button>
            </div>
            <div>
                <Link className='Link' to='/cart'>Carrito</Link>
            </div>
            <div>
                <Link className='Link' to='/'>Seguir Comprando</Link>
            </div>


        </div>

        
    );







};

export default ItemCount;