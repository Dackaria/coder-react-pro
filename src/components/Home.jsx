import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import ItemListContainer from './ItemListContainer'

const Home = () => {
  return (
    <>
        <div>
        Bienvenidos al magico mundo de los Sueños, <br/>
        donde lo que sueñas, lo consigues...<br/>
        solo, atrevete a soñar...
        </div>
        <div>
            <Link to="/itemListContainer">
            <Button>ENTRAR</Button>
            </Link>
        </div>
    </>
  )
}

export default Home