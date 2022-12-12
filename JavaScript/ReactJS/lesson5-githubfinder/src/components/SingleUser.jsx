import React, { Component } from 'react'

 class SingleUser extends Component {
     render() {
      const {login,node_id,html_url,avatar_url} = this.props.comingdata;
    return (
      <div className='col-12 col-sm-6 col-md-4'>
            <div className="card" >
            <img src={avatar_url} className="card-img-top" alt={login} />
            <div className="card-body">
                <h5 className="card-title">{login}</h5>
                <p className="card-text">{node_id}</p>
                <a target="_blank" rel="noreferrer" href={html_url} className="btn btn-primary">Go Profile</a>
            </div>
            </div>

      </div>
    )
  }
}

export default SingleUser