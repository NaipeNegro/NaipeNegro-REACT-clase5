import React, {useState, useEffect} from 'react';
import Item from '../../components/Item/Item';
import axios from 'axios';
//css?



const Detail = ({ match }) => {


    let itemID = match.params.id



    const [item, setItem] = useState([]);

    useEffect(() =>{
        axios(`https://api.github.com/users/${itemID}`)
            .then(res => setItem(res.data))

    },[itemID]);

    return (
        <div>
            <h1>Detalle</h1>

                        <Item data={item}/>
       
        </div>
    );
}

export default Detail