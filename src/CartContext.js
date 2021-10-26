import React, {useState} from 'react';


function CartProvider({defaultValue = [], children}) {
    const [ itemsCart, setItemCart] = useState(defaultValue);

    function getFromCart(id){
        return itemsCart.find(obj => obj.id === id)
    }

    function isInCart(id) {
        return id === undefined? undefined : getFromCart !== undefined
    }

    function addToCart(obj) {
        if (isInCart(obj && obj.id)){
            alert('Ya está agregado al carrito')
            return;
        }
        
        setItemCart([...CartProvider, obj]);



    }

    return <CartProvider value={{itemsCart, addToCart, isInCart, cartSize: itemsCart.length}}>
        {children}
    </CartProvider>

}

export default CartProvider