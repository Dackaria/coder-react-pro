import { Box, Card, CardBody, CardFooter, CardHeader, Grid, GridItem } from '@chakra-ui/react';
import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ findProducts }) => {
    
    if (!findProducts) {
        return <p>Producto no encontrado</p>;
      }
    return (
        <Grid templateColumns="repeat(1, 1fr)" gap={4} marginBottom="1rem">
      <GridItem colSpan={1}>
       
            <Card width='400px' minHeight='500px' marginBottom="5rem">
                <CardHeader>
                    <Box textAlign='center' key={findProducts.id}>
                        <h1 style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '24px' }}>{findProducts.titulo}</h1>
                    </Box>
                </CardHeader>
                <CardBody>
                    <Box textAlign='center'>
                        {findProducts.imagen && <img src={findProducts.imagen} alt={findProducts.titulo} />}
                        <span>{findProducts.descripcion}</span>
                        <h5 style={{ color: 'teal', fontWeight: 'bold', fontSize: '24px' }}>$ {findProducts.precio}</h5>
                    </Box>
                </CardBody>

                <CardFooter>
                   {findProducts && <ItemCount/>}
                   
                </CardFooter>

            </Card>
            </GridItem>
            
        </Grid>
    );
  
};

export default ItemDetail