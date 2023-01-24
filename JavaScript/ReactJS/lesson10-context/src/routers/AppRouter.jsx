import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from '../pages/Products'
import AddProduct from '../pages/AddProduct'
import Header from '../components/Header'
import { Container } from 'react-bootstrap'
import { ProductProvider } from '../context/ProductContext'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <ProductProvider>
    <Header/>
    <Container>
    <Routes>
            <Route path='/' element={<Products/>}></Route>
            <Route path='/add' element={<AddProduct/>}></Route>
        </Routes>
    </Container>
    </ProductProvider>
    </BrowserRouter>
  )
}

export default AppRouter