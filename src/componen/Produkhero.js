import React, { useState, useEffect } from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function ProductCarousel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseAnak = await axios.get('https://footwear-backend-985529487455.asia-southeast2.run.app/api/best');
        setProducts(responseAnak.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const itemsPerSlide = 4; 
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const carouselItems = [];

  for (let i = 0; i < totalSlides; i++) {
    const startIndex = i * itemsPerSlide;
    const endIndex = startIndex + itemsPerSlide;
    const slideProducts = products.slice(startIndex, endIndex);

    const carouselItem = (
      <Carousel.Item key={i} className='my-4 px-4'>
        <Row >
          {slideProducts.map((product) => (
            <Col key={product.id}>
              <Card>
                <Card.Img variant="top" src={product.image}  style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text style={{ width: '100%',  }}>{product.description}</Card.Text>
                  <Card.Text style={{ width: '100%',  }}>{product.pricedescription}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Carousel.Item>
    );

    carouselItems.push(carouselItem);
  }

  return <Carousel>{carouselItems}</Carousel>;
}

export default ProductCarousel;
