import { Box, Card, CardBody, CardFooter, CardHeader, Center, Grid, GridItem, Heading, Spacer } from '@chakra-ui/react';
import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ findProducts }) => {

    if (!findProducts) {
        return <p>Producto no encontrado</p>;
    }
    return (
        <Center>
            <Grid templateColumns="repeat(1, 1fr)" gap={4} marginBottom="1rem">
                <GridItem colSpan={1}>

                    <Card align="center" width='400px' minHeight='500px' marginBottom="5rem">
                        <CardHeader>
                            <Box textAlign='center' key={findProducts.id}>
                                <h1 style={{ color: 'teal', fontWeight: 'bold', fontSize: '24px' }}>{findProducts.titulo}</h1>
                            </Box>
                        </CardHeader>
                        <CardBody>
                            <Box textAlign='center'>
                                {findProducts.imagen && <img src={findProducts.imagen} alt={findProducts.titulo} />}
                                <Spacer/>
                                <Heading as='h6' size='sm' style={{ color: 'teal', fontWeight: 'bold', fontSize: '20px' }}>
    {findProducts.descripcion}
  </Heading>
                                
                                <h5 style={{ color: 'teal', fontWeight: 'bold', fontSize: '24px' }}>$ {findProducts.precio}</h5>
                            </Box>
                        </CardBody>

                        <CardFooter>
                        <Center>
        <Box textAlign="center">
                                {findProducts && <ItemCount product={findProducts} />}
                                </Box>
                            </Center>
                        </CardFooter>

                    </Card>
                </GridItem>

            </Grid>
        </Center>
    );
};

export default ItemDetail