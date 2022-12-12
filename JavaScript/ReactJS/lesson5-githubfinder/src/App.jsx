import axios from 'axios';
import React, { Component } from 'react'
import Nav from './components/Nav'
import  Search  from './components/Search'
import UserList from './components/UserList'

export class App extends Component {
    constructor(){
        super();
        this.state ={
            users: []
        }
    }

  
    
    searchUser =(keyword)=>{
        axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .then((res)=>this.setState({users:res.data.items}))
        .catch(err=>console.log(err))
    }
    
  render() {
    return (
      <>
      <Nav />
      <div className="container">
        <Search searchValue={this.searchUser}/>
        <UserList uservalue={this.state.users}/>
      </div>
      </>
    )
  }
}

export default App