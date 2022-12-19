import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const ProductDetails = () => {
    const [comingapi,setComingapi] = useState([]);
    const {url} = useParams();

    const detailsItem = comingapi.find(p=>p.id == url)
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>setComingapi(res.data))
    },[])
  return (
    <>
    {console.log(detailsItem)}
      {detailsItem === undefined ? <h1>Loading...</h1> : (  <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
            <img src={detailsItem.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
            </div>
            <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">{detailsItem.title}</h1>
            <p className="lead">{detailsItem.description}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Add to cart</button>
                
            </div>
            </div>
        </div>
        </div>) }

    </>
  )
}

export default ProductDetails