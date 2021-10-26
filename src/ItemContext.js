
import React, { useState, createContext } from 'react';

// 1 - CREAR EL CONTEXTO
export const ItemsContext = createContext();

// 2  - CREAR EL COMPONENTE PROVIDER

// 5 - PASAR PROPS DENTRO DEL COMPONENTE PROVIDER
export const ItemsProvider = ({ children }) => {
	const [items, setItems] = useState([
		{ id: 45454, name: 'Keyboard Dell', price: 20 },
		{ id: 45458, name: 'Mouse Dell', price: 10 },
		{ id: 45459, name: 'Samsung Monitor', price: 300 },
		{ id: 45453, name: 'MacBook Pro', price: 860 },
	]);

	const foo = () => {
		alert(items.length);
	};

	const clearState = () => {
		setItems([]);
	};

	// 3 - RETORNAR NUESTRO CONTEXTO CON UN .PROVIDER
	return (
		<ItemsContext.Provider value={[items, setItems, foo, clearState]}>
			{/* 4 - PASAR PROPS.CHILDREN*/}
			{children}
		</ItemsContext.Provider>
	);
};