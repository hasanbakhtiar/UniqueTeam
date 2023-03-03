import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const SingleCard = (props:any) => {
  return (
    <Col sm={6} md={4}>
      <Card>
        <Card.Img variant="top" src={props.photo} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
           {props.desc.substring(0,30)}...
          </Card.Text>
         <Link to={`/blogs/${props.id}`}><Button variant="primary">Read more</Button></Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCard;
