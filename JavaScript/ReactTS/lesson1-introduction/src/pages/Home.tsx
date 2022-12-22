import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {
  render() {
    return (
  <div className="px-4 py-5 my-5 text-center">
  <h1 className="display-5 fw-bold">Super shop market</h1>
  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4">Best shopping is here!</p>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <Link to="products" className="btn btn-dark btn-lg px-4 gap-3">Shop Now</Link>
    </div>
  </div>
</div>

    )
  }
}

export default Home