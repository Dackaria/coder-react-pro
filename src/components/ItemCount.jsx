import { Badge, Button, Flex, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useCart } from './CartContext';

const ItemCount = ({product}) => {
  console.log('Product received in ItemCount:', product);
  const toast = useToast();
  const [count, setCount] = useState(0);
  const { addToCart } = useCart();

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      toast({
        title: 'Error',
        description: 'No puedes agregar más de 10 unidades.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      toast({
        title: 'Error',
        description: 'La cantidad no puede ser negativa.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleAddToCart = () => {
    addToCart(product, count);
    if (count === 0) {
      toast({
        title: 'Error',
        description: 'Debes agregar productos al carrito.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } else {
      // console.log(`Agregando ${count} unidad(es) al carrito`);
      toast({
        title: 'Felicitaciones.',
        description: `Has agregado ${count} unidad(es) a tu carrito`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setCount(0);
    }
  };

  return (
    <Flex direction="column" align="center">
      <div>
        <Button colorScheme="teal" variant="outline" onClick={handleDecrement}>
          -
        </Button>
        <Badge colorScheme="purple">{count}</Badge>
        <Button colorScheme="teal" variant="outline" onClick={handleIncrement}>
          +
        </Button>{' '}
      </div>
      <br />
      <Button colorScheme="teal" onClick={handleAddToCart}>
        Agregar al carrito
      </Button>
    </Flex>
  );
};

export default ItemCount;

