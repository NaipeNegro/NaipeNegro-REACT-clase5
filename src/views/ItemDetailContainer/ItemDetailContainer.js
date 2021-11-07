import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
// import axios from "axios";
import "./ItemDetailContainter.css";

import { db } from '../../firebase/firebase_config';
import { collection, getDocs} from 'firebase/firestore';

//css?

const Detail = ({ match }) => {
  let itemID = match.params.id;
  // const [item, setItem] = useState([]);

  // useEffect(() => {
  //   axios(
  //     `${process.env.REACT_APP_url}/${itemID}${process.env.REACT_APP_key}`
  //   ).then((res) => setItem(res.data));
  // }, [itemID]);

  // console.log(item);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const requestData = async() =>  {
      const docs = [];
      const items = await getDocs(collection(db, "products"));
      items.forEach((document) => {
        docs.push({...document.data(), id: document.id});
        
      });
      setProducts(docs);
    };
    requestData();

  }, [itemID]);

  return (
    <div className="itemDetailContainer">
      <h1>Detalle</h1>

      <ItemDetail data={products} />
    </div>
  );
};

export default Detail;
