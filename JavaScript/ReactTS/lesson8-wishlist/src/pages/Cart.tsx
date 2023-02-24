import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const {items} = useCart()
  return (
    <div>
        {items.map((item:any)=>{
            return <p>{item.title}</p>
        })}
    </div>
  )
}

export default Cart