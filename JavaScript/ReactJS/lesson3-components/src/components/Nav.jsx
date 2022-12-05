import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#react">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#react">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#react">Link</a>
        </li>
     
      </ul>
     
    </div>
  </div>
</nav>

    )
  }
}

export default Nav