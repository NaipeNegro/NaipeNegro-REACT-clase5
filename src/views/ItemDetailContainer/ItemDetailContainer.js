import React, {useState, useEffect} from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import axios from 'axios';
//css?



const Detail = ({ match }) => {


    let itemID = match.params.id
    const [item, setItem] = useState([]);

    useEffect(() =>{
        axios(`https://rebrickable.com/api/v3/lego/minifigs/${itemID}/?key=455ee015179d58920c40b17da84e4a81`)
            .then(res => setItem(res.data))

    },[itemID]);

    console.log(item)

    return (
        <div style={{alignItems: 'center', display:'block'}}>
            <h1>Detalle</h1>

                        <ItemDetail data={item}/>
       
        </div>
    );
}

export default Detail