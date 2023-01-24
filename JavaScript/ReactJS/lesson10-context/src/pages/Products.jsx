import React from 'react'
import { Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

const Products = () => {
  const [products,setProduct] = useContext(ProductContext);
  return (
    <Row className='g-5 mt-5'>
{products.map(item=>{
  return <SingleCard title={item.title} price={item.price}/>
})}
      
  
    </Row>
  )
}

export default Products