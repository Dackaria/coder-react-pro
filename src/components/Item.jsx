import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Grid, GridItem, Spacer } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return (
        <Grid templateColumns="repeat(1, 1fr)" gap={4} marginBottom="1rem">
      <GridItem colSpan={1}>
       
            <Card align="center" width='400px' minHeight='500px' marginBottom="5rem">
                <CardHeader>
                    <Box textAlign='center' key={producto.id}>
                        <h1 style={{ color: 'teal', fontWeight: 'bold', fontSize: '24px' }}>{producto.titulo}</h1>
                    </Box>
                </CardHeader>
                <CardBody>
                    <Box textAlign='center'>
                        {producto.imagen && <img src={producto.imagen} alt={producto.titulo} />}
                    </Box>
                </CardBody>

                <CardFooter >
                            <Link to={`/item/${producto.id}`}>
                                <Button style={{ color: 'teal', fontWeight: 'bold', fontSize: '24px' }}>
                                    Ver Detalle
                                </Button>
                            </Link>
                </CardFooter>

            </Card>
            </GridItem>
        </Grid>
    );
};

export default Item