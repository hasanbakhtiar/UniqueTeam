import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
const ProductDetails = () => {
    const {url} = useParams();
    const [productData,setProductData]=useState([]);
    const detailsItem = productData.find(p=>p.id == url)
    const { addItem } = useCart();
    const notify = () => toast.success('Card added!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      })
    useEffect(()=>{
      const fetchApi=async()=>{
        const comingData = await axios.get('https://fakestoreapi.com/products')
        setProductData(comingData.data)
      }
      fetchApi();
    },[])
   
  return (
    <>
    {detailsItem === undefined ? <h1>Loading...</h1> :  ( <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
            <img src={detailsItem.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
            </div>
            <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">{detailsItem.title}</h1>
            <p className="lead">{detailsItem.description}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button onClick={()=>{notify(addItem(detailsItem))}} type="button" className="btn btn-primary btn-lg px-4 me-md-2">Add to cart</button>
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
theme="light"
/>

            </div>
            </div>
        </div>
        </div> )}
    
     
    </>
  )
}

export default ProductDetails