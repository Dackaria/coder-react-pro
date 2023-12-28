import React from 'react'
import Item from './Item'
import { Grid } from '@chakra-ui/react'

const ItemList = ({productos}) => {
  return (
    <div>
        <Grid templateColumns="repeat(auto-fit, minmax(400px, 1fr))" gap={6} justifyContent="center">
       
       {productos.map((p)=>
       <Item key={p.id} producto={p}/>)
      }
      </Grid>
    </div>
  )
}

export default ItemList