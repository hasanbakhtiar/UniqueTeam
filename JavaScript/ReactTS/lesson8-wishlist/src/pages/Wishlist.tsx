import React from 'react'
import { Button } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist'

const Wishlist = () => {
    const {items} = useWishlist();
    const {addItem} = useCart();
  return (
    <div>
        {items.map((item:any)=>{
            return <p>{item.title}<Button onClick={()=>{addItem(item)}}>addtocart</Button></p>
        })}
    </div>
  )
}

export default Wishlist