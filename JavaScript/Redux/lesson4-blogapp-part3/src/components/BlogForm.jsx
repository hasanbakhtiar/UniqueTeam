import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';





class BlogForm extends Component{
  constructor(props){
    super(props);
    this.state={
      formimg:props.editblog? props.editblog.img:"",
      formtitle:props.editblog? props.editblog.title:"",
      formdesc:props.editblog? props.editblog.desc:"",
    }
  }

  formSubmit=e=>{
    e.preventDefault();
    if (!this.state.formimg || !this.state.formtitle || !this.state.formdesc) {
        alert('please, fill input!')
    }else{
      this.props.onFormSubmit({
        img:this.state.formimg,
        title:this.state.formtitle,
        desc:this.state.formdesc,
      })
    }
  }
  
  render(){
    return (
      <>
      <Form onSubmit={this.formSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label>Blog photo</Form.Label>
          <Form.Control type="text" placeholder="Enter photo url" 
          onChange={e=>{
              const formimg = e.target.value;
              this.setState(()=>({formimg}))
          }}
          
          value={this.state.formimg}
          />
      
        </Form.Group>
  
        <Form.Group className="mb-3" >
          <Form.Label>Blog title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" 
          onChange={e=>{
              const formtitle = e.target.value;
              this.setState(()=>({formtitle}))
          }} 
          value={this.state.formtitle}
          />
      
        </Form.Group>
  

      
        <Form.Group className="mb-3" >
          <Form.Label>Blog description</Form.Label>
          <FloatingLabel controlId="floatingTextarea2" label="Enter description">
        <Form.Control
          as="textarea"
          style={{ height: '100px' }}
          onChange={e=>{
            const formdesc = e.target.value;
            this.setState(()=>({formdesc}))
        }}
        value={this.state.formdesc}
        />
      </FloatingLabel>
        
      
        </Form.Group>
        <Button variant="primary" type="submit">
          Publish
        </Button>
      </Form> 
      </>
    )
  }
}




export default BlogForm