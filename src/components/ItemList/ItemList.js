import React, {useState, useEffect} from "react";

import Item from "../Item/Item";
import axios from "axios";
import { Link } from "react-router-dom";

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        obtenerDatos()
    },[])

    const obtenerDatos = async () => {
        const data = await fetch('https://rebrickable.com/api/v3/lego/minifigs/?key=455ee015179d58920c40b17da84e4a81')
        const items = await data.json()
        const figures = items.results
        setItems(figures)
    }





    return (
        <div className="itemsContainer">
            <h1>Items</h1>
            {items.map((item) =>{
                return (
                    <div>
                        <Link to={`/detail/${item.set_num}`}>
                        <Item data={item}/>
                    </Link>
                    </div>
                )
            })
            }


        </div>
    );



}

export default ItemList;