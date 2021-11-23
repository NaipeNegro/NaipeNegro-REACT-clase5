import React, { useState, useEffect, createContext} from "react";

import { collection, getDocs} from 'firebase/firestore';

import { db } from '../../my-app/src/firebase/firebase_config';

export const FirebaseContext = createContext();

export const FirebaseProvider = ({children}) => {

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
  
    }, []);

    return (<FirebaseContext.Provider value={[products, setProducts]}>
        {children}

    </FirebaseContext.Provider>
    
    );

};

