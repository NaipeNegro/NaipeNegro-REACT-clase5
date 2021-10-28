import React, { useState, useEffect } from "react";

import Item from "../Item/Item";
import { Link } from "react-router-dom";
import "./ItemList.css";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch(
      `${process.env.REACT_APP_url}${process.env.REACT_APP_key}`
    );
    const items = await data.json();
    const figures = items.results;
    setItems(figures);
  };

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
        {items.map((item) => {
          return (
            <div>
              <Link to={`/detail/${item.set_num}`}>
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
