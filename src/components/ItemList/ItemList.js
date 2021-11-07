import React, { useState, useEffect } from "react";


import Item from "../Item/Item";
import { Link } from "react-router-dom";
import "./ItemList.css";

import { db } from '../../firebase/firebase_config';
import { collection, getDocs} from 'firebase/firestore';


const ItemList = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const requestData = async() =>  {
      const docs = [];
      const items = await getDocs(collection(db, "products"));
      items.forEach((document) => {
        docs.push({...document.data(), id: document.id});
        setProducts(docs);

      });
    };
    requestData();

  }, []);

  return (
    <div className="itemsContainer" style={{ alignItems: "center" }}>
      <div
        id="figuresList"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          padding: "2%",
        }}
      >
        {products.map((item) => {
          return (
            <div>
              <Link to={`/detail/${item.id}`}>
                <Item data={item} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
