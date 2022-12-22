import React, { Component } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nav from '../components/Nav'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import NotFoundPage from '../pages/NotFoundPage'
import Products from '../pages/Products'
import Login from '../pages/Login'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import { CartProvider } from 'react-use-cart'

export class AppRouter extends Component {
  render() {
    return (
       <CartProvider>
         <BrowserRouter>
        <Nav />
      <div className="container">
      <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/products/:url' element={<ProductDetails/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='*' element={<NotFoundPage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
       </CartProvider>
    )
  }
}

export default AppRouter