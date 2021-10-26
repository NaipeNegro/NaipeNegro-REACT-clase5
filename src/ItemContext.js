
import React, { useState, createContext } from 'react';

// 1 - CREAR EL CONTEXTO
export const ItemsContext = createContext();

// 2  - CREAR EL COMPONENTE PROVIDER

// 5 - PASAR PROPS DENTRO DEL COMPONENTE PROVIDER
export const ItemsProvider = ({ children }) => {
	const [items, setItems] = useState([

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