import React, { Component } from 'react'

 class SingleProduct extends Component {
  render() {
    return (
        <div className="col-12 col-sm-6 col-md-4">
       <div className="card" >
  <img src={this.props.photo} height={300} className="card-img-top" alt={this.props.title} />
  <div className="card-body">
    <h5 className="card-title">{this.props.title.substring(0,10)}</h5>
    <p className="card-text">{this.props.desc.substring(0,30)}...</p>
    <p className="card-text">{this.props.price}$</p>
    <a href="." className="btn btn-primary">Read more</a>
  </div>
</div>
</div>

    )
  }
}

export default SingleProduct