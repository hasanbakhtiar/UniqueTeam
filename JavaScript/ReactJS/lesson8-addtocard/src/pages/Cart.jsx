import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const {isEmpty,items} = useCart();
    if (isEmpty) return <img src="https://cdn.nailib.com/public/images/gifs/cart.gif" alt="" />;
  return (
    <div>
        <h1 className='text-center my-5'>Cart Page</h1>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Photo</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Del</th>
    </tr>
  </thead>
  <tbody>
    {items.map((fd,i)=>(
            <tr>
      <th scope="row">1</th>
      <td><img src={fd.image} width={50} alt="" /></td>
      <td>{fd.title}</td>
      <td>{fd.price}$</td>
      <td><button className='btn btn-primary'>-</button>
      <span className='mx-2'>0</span>
      <button className='btn btn-primary'>+</button>
      </td>
      <td><button className='btn btn-danger'>del</button></td>
    </tr>
    ))}


  </tbody>
</table>
    </div>
  )
}

export default Cart