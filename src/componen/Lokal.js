import React, { useEffect, useState } from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function Lokal() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseAnak = await axios.get('https://footwear-backend-985529487455.asia-southeast2.run.app/api/lokals');
        setProducts(responseAnak.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const itemsPerSlide = 5;
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const carouselItems = [];

  for (let i = 0; i < totalSlides; i++) {
    const startIndex = i * itemsPerSlide;
    const endIndex = startIndex + itemsPerSlide;
    const slideProducts = products.slice(startIndex, endIndex);

    const carouselItem = (
      <Carousel.Item key={i} className="my-4 px-3">
        <Row className="d-flex justify-content-center">
          {slideProducts.map((product) => (
            <Col key={product.id}  className="mb-4 d-flex">
              <Card className="w-500">
                <Card.Img 
                  variant="top" 
                  src={product.image} 
                  style={{ 
                    objectFit: 'cover', 
                    height: '200px',
                    width: '100%'
                  }} 
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-truncate">{product.title}</Card.Title>
                  <Card.Text className="flex-grow-1" style={{ fontSize: '0.9rem' }}>
                    {product.description}
                  </Card.Text>
                  <Card.Text className="fw-bold mt-auto">
                    {product.pricedescription}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Carousel.Item>
    );

    carouselItems.push(carouselItem);
  }

  return <Carousel interval={null}>{carouselItems}</Carousel>;
}

export default Lokal;