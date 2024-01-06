import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const db = getFirestore();
        const itemDocRef = doc(db, 'bolsos', id);
        const itemDocSnap = await getDoc(itemDocRef);

        if (itemDocSnap.exists()) {
          setProducto({
            id: itemDocSnap.id,
            ...itemDocSnap.data(),
          });
        } else {
          console.error('Producto no encontrado');
        }

        setLoading(false);
      } catch (error) {
        console.error('Error al cargar el producto:', error);
        setLoading(false);
      }
    };

    fetchProducto();
  }, [id]);

  return loading ? (
    <p>Cargando producto...</p>
  ) : (
    <ItemDetail findProducts={producto} />
  );
};

export default ItemDetailContainer;

