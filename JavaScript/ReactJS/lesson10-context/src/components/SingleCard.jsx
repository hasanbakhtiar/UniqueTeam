import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleCard = ({title,price}) => {
  return (
  <Col sm={12} md={4}>
    <Card >
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
          {price}$
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </Col>
  )
}

export default SingleCard