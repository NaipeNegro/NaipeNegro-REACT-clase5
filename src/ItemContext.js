import React, {useState, createContext} from "react";

export const ItemContext = createContext();

export const ItemsProvider = ({children}) => {
    const [items, setItems] = useState([
        {id:1, name: 'Figuras', price: 30},
        {id:2, name: 'Piezas', price: 10},
        {id:3, name: 'Sets', price: 100}

    ]);

    return(
        <ItemContext.Provider value={[items, setItems]}>
            {children}
        </ItemContext.Provider>
    );

};