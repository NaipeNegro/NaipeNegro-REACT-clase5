import React, { useContext } from 'react';
import './Cart.css';
import { ItemsProvider, ItemContext } from '../../ItemContext';





const Cart = () => {
    const {items, setItems} = useContext(ItemContext)
    return (
        <div>
            <h1>Carrito</h1>
            <ItemsProvider value={[items, setItems]}>

            </ItemsProvider>
        </div>
    )
}

export default Cart