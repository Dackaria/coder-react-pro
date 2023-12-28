import React from 'react'
import CartWidget from './CartWidget'
import { Box, Flex, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Flex  height="200px">
            <Box p='4'>
              <Link to="/">
             <img src="../assets/img/brand.jpeg" alt="brand"  style={{ width: '200px', height: 'auto' }}/>
             </Link>
            </Box>
            <Spacer/>
            <Menu>
            <MenuButton>
            <span style={{ color: 'blue', fontWeight: 'bold', fontSize: '24px' }}>Categorias</span>
            </MenuButton>
            <MenuList>
                <MenuItem>
                <Link to={`/category/${`Bolsos`}`}>Bolsos</Link>
                </MenuItem>
                <MenuItem>
                <Link to={`/category/${`Portadores`}`}>Portadores</Link>
                </MenuItem>
                <MenuItem>
                <Link to={`/category/${`Deportivos`}`}>Deportivos</Link>
                </MenuItem>
            </MenuList>
         </Menu>
        
            <Spacer/>

            <Box p='4'>
              <Link to="/cart">
            <CartWidget/>
            </Link>
            </Box>
        </Flex>
    </div>
  )
}

export default NavBar;