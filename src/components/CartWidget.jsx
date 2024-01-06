// En CartWidget.jsx
import React from 'react';
import { useCart } from './CartContext';

const CartWidget = () => {
  const { cart } = useCart();

  // Verifica que la cantidad sea un número válido y suma las cantidades
  const totalQuantity = cart.reduce((total, item) => {
    const quantity = typeof item.quantity === 'number' ? item.quantity : 0;
    return total + quantity;
  }, 0);

  return (
    <div>
      <img src="../assets/img/carrito.jpeg" alt="carrito" style={{ width: '50px', height: 'auto' }} />{' '}
      <span style={{ color: 'blue', fontWeight: 'bold' }}>{totalQuantity}</span>
    </div>
  );
};

export default CartWidget;

