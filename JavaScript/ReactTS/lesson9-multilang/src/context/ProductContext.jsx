import axios from 'axios';
import { useState, createContext, useEffect } from 'react'

export const ProductContext = createContext();;

export const ProductProvider = (props) => {
  const [productsaz, setProductsaz] = useState ([]);
  useEffect(() => {

    const fetchApiaz = async () => {
      const comingData = await axios.get('http://127.0.0.1:5500/src/data/productaz.json')
      setProductsaz(comingData.data)
    }
    fetchApiaz();



  }, [])

  return (
    <ProductContext.Provider value={[productsaz, setProductsaz]}>
      {props.children}
    </ProductContext.Provider>
  )
}
