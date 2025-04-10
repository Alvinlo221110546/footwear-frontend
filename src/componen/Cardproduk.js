import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import React from 'react';

function Cardproduk(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.produk}</Card.Title>
        <Card.Text >
          {props.deskripsi}
        </Card.Text>
        <Nav.Link as={Link} to="/Product">
          <Button variant="dark">Beli sekarang</Button>
        </Nav.Link>

      </Card.Body>
    </Card>
  );
}

export default Cardproduk;