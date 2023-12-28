import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import ItemDetail from './components/ItemDetail'
import Home from './components/Home'

function App() {
 
//filter son todos, find el primero que encuentre
  return (
    <>
    <BrowserRouter>
    <NavBar/>
   
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/itemListContainer" element={<ItemListContainer/>}> </Route>
      <Route exact path="/itemDetailContainer" element={<ItemDetailContainer />}></Route>
      <Route exact path="/cart" element={<Cart />}></Route>
      <Route exact path="/itemDetail" element={<ItemDetail />}></Route>
      <Route exact path="/category/:category" element={<ItemListContainer />}></Route>
      <Route exact path="/Item/:id" element={<ItemDetailContainer />}></Route>

    </Routes>
    

    </BrowserRouter>
   
    </>
  )
}

export default App
