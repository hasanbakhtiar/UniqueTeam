import axios from "axios";
import { createContext, useEffect, useState } from "react";
interface propType{
  children:any[],
}

type ContextType = {}[]

export const ProductContext = createContext<ContextType>([]);

export const  ProductProvider = (props:propType)=>{
    const [products,setProducts] = useState<ContextType>([]);
    useEffect(()=>{
      axios.get('https://fakestoreapi.com/products')
      .then(res=>setProducts(res.data))
    },[])
  
    return (
      <ProductContext.Provider value={[products,setProducts]}>
        {props.children}
      </ProductContext.Provider>
    )
} 


