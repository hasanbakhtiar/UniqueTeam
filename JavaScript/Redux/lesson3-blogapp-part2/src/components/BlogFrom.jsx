import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const BlogFrom = () => {
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Blog photo</Form.Label>
        <Form.Control type="text" placeholder="Enter photo url" />
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Blog title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" />
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Blog description</Form.Label>
        <Form.Control type="text" placeholder="Enter description" />
    
      </Form.Group>
      <Button variant="primary" type="submit">
        Publish
      </Button>
    </Form> 
    </>
  )
}

export default BlogFrom