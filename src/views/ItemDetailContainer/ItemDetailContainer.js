import React, {useState, useEffect} from 'react';
import Item from '../../components/Item/Item';
import axios from 'axios';
//css?



const Detail = ({ match }) => {


    let itemID = match.params.id



    const [item, setItem] = useState([]);

    // useEffect(() => {
    //     obtenerDatos()
    // },[])

    // const obtenerDatos = async () => {
    //     const data = await fetch(`https://rebrickable.com/api/v3/lego/minifigs/${itemID}/?key=455ee015179d58920c40b17da84e4a81`)
    //     const items = await data.json()
    //     const figures = items.results
    //     setItem(figures)
    // }

    useEffect(() =>{
        axios(`https://rebrickable.com/api/v3/lego/minifigs/${itemID}/?key=455ee015179d58920c40b17da84e4a81`)
            .then(res => setItem(res.data))

    },[itemID]);

    console.log(item)

    return (
        <div>
            <h1>Detalle</h1>

                        <Item data={item}/>
       
        </div>
    );
}

export default Detail