import axios from 'axios';
import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super();
    this.state={
      mydata:[]
    }
  }
  componentDidMount(){
  //  const fetchapi = async()=>{
  //   const comingdata = await axios.get('https://fakestoreapi.com/products');
  //   this.setState({mydata:comingdata.data})
  //  }
  //  fetchapi();

  axios.get("https://fakestoreapi.com/products")
  .then(res=>this.setState({mydata:res.data}))
 
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default App