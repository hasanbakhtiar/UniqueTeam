import React from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const SingleProduct = ({title,desc,photo}) => {
  return (
   <Col sm={12} md={3}>
    <Card >
    <Card.Img variant="top" src={photo} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
       {desc}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
   </Col>
  )
}

export default SingleProduct