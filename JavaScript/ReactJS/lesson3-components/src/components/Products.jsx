import React, { Component } from 'react'
import SingleCard from './SingleCard'
import myphoto from '../img/unsplash.jpg';
class Products extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row g-5">
            <SingleCard title="table" photo={myphoto}/>
            <SingleCard title="pen"/>
            <SingleCard title="book"/>
         
        </div>
      </div>
    )
  }
}

export default Products