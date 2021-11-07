import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";

import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Detail from "./views/ItemDetailContainer/ItemDetailContainer";

import "semantic-ui-css/semantic.min.css";
import Cart from "./views/Cart/Cart";

// import { Router, Link } from 'react-router';

import { ItemsProvider } from "./ItemContext";

// import 'bootstrap/dist/css/bootstrap.min.css';

// import { db } from './firebase/firebase_config';
// import { collection, getDocs} from 'firebase/firestore';
// import React, {useState, useEffect } from "react";

function App() {
  // const [products, setProducts] = useState([]);



  // useEffect(() => {
  //   const requestData = async() =>  {
  //     const docs = [];
  //     const items = await getDocs(collection(db, "products"));
  //     items.forEach((document) => {
  //       // console.log(document.data(), document.id);
  //       docs.push({...document.data(), id: document.id});
        
  //     });
  //     setProducts(docs);
  //   };
  //   requestData();

  // }, []);
  
  return (
    <ItemsProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </ItemsProvider>
  );
}

export default App;
