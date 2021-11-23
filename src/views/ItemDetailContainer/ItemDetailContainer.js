import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
// import axios from "axios";
import "./ItemDetailContainter.css";

// import {getFirestore}   from 'firebase/firestore';

import { db, database } from '../../firebase/firebase_config';
import { collection, doc, getDocs, getDoc, getFirestore } from 'firebase/firestore';

//css?

const Detail = ({ match }) => {
  let itemID = match.params.id;

  console.log(itemID)

  // const [item, setItem] = useState([]);

  // useEffect(() => {
  //   axios(
  //     `${process.env.REACT_APP_url}/${itemID}${process.env.REACT_APP_key}`
  //   ).then((res) => setItem(res.data));
  // }, [itemID]);

  // console.log(item);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const requestData = async () => {
      const docs = [];
      const items = await getDocs(collection(db, "products"));
      console.log(items)
      items.forEach((document) => {
        docs.push({ ...document.data(), id: document.id });

      });
      console.log(docs)
      setProducts(docs);
    };
    requestData();

  }, [itemID]);

  console.log(products)

  const productDetail = products.filter(id => id === itemID.toString() );

  console.log(productDetail)

  const productoToShow = productDetail

  // db.collection('products').get().then((snapshot) => {
  //   console.log(snapshot)
  // })

  // const docRef = doc(db, "products");
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }

  // async function someFunction(){
  //   await db.collection('products').doc(itemID).get();
  //  }

  //  console.log(someFunction())

 

  // const [item, setItem] = useState([]);

  // useEffect(() =>{

  //   const db = getFirestore();

  //   const itemCollection = db.collection('products');
  //   const item = itemCollection.doc(itemID);

  //   item.get().then((doc) =>{
  //     if (!doc.exist){
  //       console.log('no existe');
  //       return;
  //     }
  //     console.log('Item encontrado');
  //     setItem({id: doc.id, ...doc.data()});

  //   })
  // })

  return (
    <div className="itemDetailContainer">
      <h1>Detalle</h1>

      <ItemDetail data={productDetail} />
    </div>
  );
};

export default Detail;
