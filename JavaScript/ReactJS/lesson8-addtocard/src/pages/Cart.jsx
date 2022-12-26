import React from 'react'
import { useCart } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify';
const Cart = () => {
    const {isEmpty,items,removeItem,updateItemQuantity,cartTotal,emptyCart} = useCart();
    const notify = () => toast.error('Product deleted!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });;
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
      <td>{(fd.price*fd.quantity).toFixed(2)}$</td>
      <td><button className='btn btn-primary' onClick={() => updateItemQuantity(fd.id, fd.quantity - 1)}>-</button>
      <span className='mx-2'>{fd.quantity}</span>
      <button className='btn btn-primary' onClick={() => updateItemQuantity(fd.id, fd.quantity + 1)}>+</button>
      </td>
      <td><button onClick={()=>{notify(removeItem(fd.id))}} className='btn btn-danger'>del</button>
                <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
      </td>
    </tr>
    ))}


  </tbody>
</table>

<h3>Total Price: {cartTotal}$</h3>
<button onClick={emptyCart} className="btn btn-outline-danger">Clear all</button>
    </div>
  )
}

export default Cart