import React,{useState,createContext, useEffect} from "react";
// import productdata from '../data/productdata'
import axios from "axios";
export const ProductContext = createContext();

export const ProductProvider =props=>{
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res=>setProducts(res.data))
    },[])
    return(
        <ProductContext.Provider value={[products,setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )

}