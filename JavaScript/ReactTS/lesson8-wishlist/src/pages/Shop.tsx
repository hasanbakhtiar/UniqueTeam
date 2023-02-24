import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';


const Shop:React.FC = () => {
    const [products,setProducts] = useState([]);
    const {addItem} = useCart();
    const { addWishlistItem } = useWishlist();
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>setProducts(res.data))
      },[])
      
  return (
    <div>
        {products.map((item:any)=>{
            return <p key={item.id}>{item.title}<Button variant='success' onClick={()=>{addItem(item)}}>Addtocart</Button><Button onClick={()=>{addWishlistItem(item)}}>wishlist</Button></p>
        })}
    </div>
  )
}

export default Shop