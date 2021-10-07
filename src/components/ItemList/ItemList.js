import React, {useState, useEffect} from "react";

import Item from "../Item/Item";

const ItemList = () => {
    const [items, setItems] = useState([]);

    //manera sencilla

    // useEffect(() =>{
    //     setTimeout(()=>{
    //         console.log('Geeting data')
    //     },2000);


    // },[])

    //manera complicada:


    useEffect(() =>{
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(data => setItems(data))
    },[]);



    return (
        <div id="items">
            <h1>Items</h1>
            {items.map((item) =>{
                return (
                    <div>
                        <Item data={item}/>
                    </div>
                )
            })
            }


        </div>
    );



}

export default ItemList;