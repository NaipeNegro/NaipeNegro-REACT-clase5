import React, { useContext } from 'react';
import { ItemsContext } from '../../ItemContext'
import ItemCart from '../../components/ItemCart/ItemCart';
import './Cart.css';

const Cart = () => {
    const [items, setItems] = useContext(ItemsContext);

    return (
        <div className='carrito'>
            <h1>Carrito</h1>
			{items.map((item) => {
				return <ItemCart data={item} key={item.id} />;
			})}
        </div>
    )
}

export default Cart