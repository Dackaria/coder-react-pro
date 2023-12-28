import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        // Simula la carga de productos después de 200ms
        await new Promise(resolve => setTimeout(resolve, 500));

        const productos = [
          { id: 1, titulo: "Bolso de mano", imagen: "../assets/img/1.jpg", descripcion: "descripcion del producto A", precio: 10500, category: "Bolsos" },
          { id: 2, titulo: "Porta Zapatos", imagen: "../assets/img/4.jpg", descripcion: "descripcion del producto B", precio: 15000, category: "Portadores" },
          { id: 3, titulo: "Addidas", imagen: "../assets/img/5.jpg", descripcion: "descripcion del producto C", precio: 27000, category: "Deportivos" },
          { id: 4, titulo: "Pumma", imagen: "../assets/img/7.jpg", descripcion: "descripcion del producto D", precio: 19500, category: "Deportivos" }
        ];

        setProductos(productos);
        setLoading(false); // Indica que la carga ha terminado
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    };

    cargarProductos();
  }, []);

  const findProducts = id ? productos.find((producto) => producto.id === Number(id)) : null;

  return loading ? (
    <p>Cargando productos...</p>
  ) : (
    <ItemDetail findProducts={findProducts} />
  );
};

export default ItemDetailContainer;
