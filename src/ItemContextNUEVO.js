import React, { useState, createContext } from "react";


export const ItemsContext = createContext();
export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const addItem = (item, cantidad) => {
        setItems([...items, { cantidad: cantidad, ...item }]);
    }
    const removeItem = (itemId) => {
        setItems(items.filter(item => item.id !== itemId));
    }
	const clearState = () => {
		setItems([]);
	};
    const isInCart = (itemId) => {
        return !!items.find(item => item.id === itemId);
    }
    const foo = () => {
		alert(items.length);
	};

    return (
        <ItemsContext.Provider value={{ items, setItems, addItem, removeItem, isInCart, clearState, foo }}>
            {children}
        </ItemsContext.Provider>
    );
}