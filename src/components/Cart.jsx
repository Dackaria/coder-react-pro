import React from 'react';
import { Button, Flex, Heading, List, ListItem, Spacer, Image, Text } from '@chakra-ui/react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = useCart();

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleIncrement = (productId) => {
    incrementQuantity(productId);
  };

  const handleDecrement = (productId) => {
    decrementQuantity(productId);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      const itemPrice = typeof item.precio === 'number' ? item.precio : 0;
      return total + itemPrice * item.quantity;
    }, 0);
  };

  return (
    <Flex direction="column" align="center">
      <Heading as="h2" size="lg" mb={4} style={{ color: 'teal', fontWeight: 'bold', fontSize: '24px' }}>
        Carrito de Compras
      </Heading>
      <List spacing={3}>
        {cart.map((item, index) => (
          <ListItem key={index}>
            <Flex alignItems="center">
              {console.log('CartItem:', item)}
              <Image src={item?.imagen} alt={item?.titulo} boxSize="50px" mr={4} />
              <div>
                {item.titulo} - Cantidad: {item.quantity} - Precio: ${item.precio.toFixed(2)}
              </div>
              <Spacer />
              <Button colorScheme="teal" size="xs" onClick={() => handleDecrement(item.id)}>
                -
              </Button>
              <Button colorScheme="teal" size="xs" onClick={() => handleIncrement(item.id)}>
                +
              </Button>
              <Button colorScheme="red" size="xs" onClick={() => handleRemove(item.id)}>
                Quitar
              </Button>
            </Flex>
          </ListItem>
        ))}
      </List>
      {cart.length > 0 && (
        <Flex direction="column" align="center">
          <Text mt={4} fontWeight="bold">
            Total: ${calculateTotalPrice().toFixed(2)}
          </Text>
          <Button mt={4} onClick={handleClearCart}>
            Vaciar Carrito
          </Button>
        </Flex>
      )}

      <Flex align="center">
        <Link to="/itemListContainer">
          <Button mt={4}>
            Seguir Comprando
          </Button>
        </Link>
        {cart.length > 0 && (
          <Button mt={4}>
            Ir al Pago
          </Button>
        )}
      </Flex>

    </Flex>
  );
};

export default Cart;

