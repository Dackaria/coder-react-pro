import { Button, Center, Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';

const Home = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="100vh" // Asegura que el fondo abarque el 100% del alto de la pantalla
      color="#8A2BE2"
      fontFamily="comic-sans" // Cambia la fuente a una de fantasía
      fontSize="2xl" // Cambia el tamaño del texto según tus preferencias
      fontWeight="bold"
    >
      <div style={{ textAlign: 'center', marginTop: '-5rem' }}>
        Bienvenidos al mágico mundo de los Sueños, <br />
        donde lo que sueñas, se hace realidad... <br />
        solo, atrévete a soñar...
      </div>
      <Link to="/itemListContainer">
        <Button mt="4" colorScheme="#8A2BE2" variant="ghost">
          ENTRAR
        </Button>
      </Link>
    </Flex>
  );
};

export default Home;