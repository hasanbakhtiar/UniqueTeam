import axios from 'axios'
import React, { Component } from 'react'
import SingleProduct from '../components/SingleProduct'

 class Products extends Component {
    constructor(){
        super()
        this.state={
            productData:[]
        }
    }

    componentDidMount(){
        axios.get('https://fakestoreapi.com/products')
        .then(res=>this.setState({productData:res.data}));

    }
  render() {
    return (
      
      this.state.productData === [] ? <h1>Loading...</h1> : (
      <div className='row g-5'>
            {this.state.productData.map((fd,i)=>{
               return <SingleProduct data={fd} id={fd.id} title={fd.title} photo={fd.image} key={i} desc={fd.description} price={fd.price} />
            })}
      </div>
    ))
  }
}

export default Products