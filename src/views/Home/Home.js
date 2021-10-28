import React from "react";
import ItemList from "../../components/ItemList/ItemList";
import "./Home.css";

const Home = () => {
  return (
    <div className="cuerpo">
      <h1>Items</h1>
      <ItemList />
    </div>
  );
};

export default Home;
