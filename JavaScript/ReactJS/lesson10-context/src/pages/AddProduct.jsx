import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [ititle,setiTitle] = useState("");
  const [iprice,setiPrice] = useState("");
  const [products,setProduct] = useContext(ProductContext);
  const navigate = useNavigate();
  const addProduct=e=>{
      e.preventDefault();
      setProduct(prevProduct=>[...prevProduct,{title:ititle,price:iprice}])
      navigate('/')
  }
  
  
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Col md={6}>
        <Form onSubmit={addProduct}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" 
            onChange={e=>{setiTitle(e.target.value)}}
             />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Enter Price"
            onChange={e=>{setiPrice(e.target.value)}}
             />
          </Form.Group>

          <Button variant="primary" type="submit">
            Publish
          </Button>
        </Form>
      </Col>
    </div>
  );
};

export default AddProduct;
