import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleProduct from "./SingleProduct";
import axios from "axios";
const Product = () => {
  const [apidata, setApidata] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const comingData = await axios.get("https://fakestoreapi.com/products");
      setApidata(comingData.data);
    };
    fetchApi();
  }, []);
  return (
    <Container>
      <Row gap={5}>
        {apidata.map((item) => {
          return (
            <SingleProduct
              title={item.title}
              desc={item.description}
              photo={item.image}
              key={item.id}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default Product;
