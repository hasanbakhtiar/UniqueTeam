import React, { Component } from 'react'
import { Button, Container } from 'react-bootstrap';

class Text extends Component{
  componentWillUnmount() {
    alert('delete')
  }
  render(){
    return(
<h1>Hello React</h1>
    )
  }
}

class AppLifeCycle extends Component {
    constructor(){
        super();
        this.state={
            count:0,
            display:true
        }
    }


    
    delete=()=>{
      this.setState({display:false})
    }
    
   
    componentDidUpdate(){
      console.log('componentDidUpdate is runnig');
    }

   
  render() {
    let data;
    if (this.state.display) {
     data =  <Text />
    }
    return (
      <Container>
        {data}
        <p>{this.state.count}</p>
        <Button onClick={()=>{
            this.setState({
                count:this.state.count +1
            })
        }}>add</Button>
        <Button onClick={this.delete}>del</Button>
      </Container>
    )
  }
}

export default AppLifeCycle