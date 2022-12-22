import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart';

const Nav=()=> {
    const { totalItems } = useCart();
    return (
     <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Shop</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link "  to=".">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link "  to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link "  to="products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link "  to="contact">Contact</NavLink>
        </li>
      </ul>
      <div className="d-flex" role="search">
        <Link to="cart" className="btn btn-outline-light me-3"><i class="fa-solid fa-cart-shopping"></i>({totalItems})</Link>
        <Link to="login" className="btn btn-outline-warning">Sign In</Link>
      </div>
    </div>
  </div>
</nav>

    )
  }

export default Nav