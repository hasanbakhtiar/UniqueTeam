import React, { Component } from 'react'
import SingleUser from './SingleUser'

 class UserList extends Component {
  render() {
    return (
      <div className='row g-5'>
        {this.props.uservalue.map((fd,i)=>(
            
            <SingleUser key={i} comingdata={fd} />
        ))}
      </div>
    )
  }
}

export default UserList