import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs, getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {
  const { category } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const db = getFirestore();
        const itemCollection = collection(db, 'bolsos');
        let q;

        if (category) {
          // Si hay una categoría, filtra por esa categoría
          q = query(itemCollection, where('categoria', '==', category));
        } else {
          // Si no hay categoría, obtén todos los productos
          q = itemCollection;
        }

        const snapshot = await getDocs(q);
        
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductos(docs);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar productos:', error);
        setLoading(false);
      }
    };

    fetchProductos();
  }, [category]); // Agrega category como dependencia para que se ejecute el efecto cuando cambie la categoría

  console.log('Categoría:', category);
  console.log('Productos:', productos);

  return loading ? (
    <p>Cargando productos...</p>
  ) : (
    <ItemList productos={productos} />
  );
};

export default ItemListContainer;

