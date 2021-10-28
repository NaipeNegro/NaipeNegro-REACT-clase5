import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import axios from "axios";
import "./ItemDetailContainter.css";
//css?

const Detail = ({ match }) => {
  let itemID = match.params.id;
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios(
      `${process.env.REACT_APP_url}/${itemID}${process.env.REACT_APP_key}`
    ).then((res) => setItem(res.data));
  }, [itemID]);

  console.log(item);

  return (
    <div className="itemDetailContainer">
      <h1>Detalle</h1>

      <ItemDetail data={item} />
    </div>
  );
};

export default Detail;
