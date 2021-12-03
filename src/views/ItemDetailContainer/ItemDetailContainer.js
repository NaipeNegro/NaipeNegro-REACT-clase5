import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase/firebase_config";

const ItemDetailContainer = ({ match }) => {
  const itemId = match.params.id;
  const [product, setProduct] = useState([]);


  useEffect(() => {
    const getProductData = async () => {
      const docRef1 = doc(db, "products", itemId);
      const docSnap1 = await getDoc(docRef1);

      if (docSnap1.exists()) {
        const item1 = docSnap1.data();
        const id1 = docSnap1.id;
        setProduct({ ...item1, id1 });
      }
      
      
    };
    getProductData();
  }, [itemId]);

  
  return (
    <div className="itemDetailContainer">
      <h1>Detalle</h1>

      <ItemDetail data={product} />
    </div>
  );
};

export default ItemDetailContainer;
