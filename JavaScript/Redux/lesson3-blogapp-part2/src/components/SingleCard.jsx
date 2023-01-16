import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const SingleCard = ({ photo, title, desc,id }) => {
  return (
    <Col sm={6} md={4}>
      <Card>
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {desc.substring(0,30)}...
          </Card.Text>
         <Link to={`/blogs/${id}`}><Button variant="primary">Read more</Button></Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCard;
