import React, {useState, useEffect} from "react";

import Item from "../Item/Item";
import axios from "axios";
import { Link } from "react-router-dom";

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() =>{
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(data => setItems(data))
    },[]);



    return (
        <div className="itemsContainer">
            <h1>Items</h1>
            {items.map((item) =>{
                return (
                    <div>
                        <Link to={`/detail/${item.id}`}>
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