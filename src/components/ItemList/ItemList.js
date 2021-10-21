import React, {useState, useEffect} from "react";

import Item from "../Item/Item";
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
        <div className="itemsContainer" style={{alignItems:'center'}}>
            <h1>Items</h1>
            <div  id="figuresList" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding:'2%'}}>
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


        </div>
    );



}

export default ItemList;