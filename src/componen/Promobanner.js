import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Promo1 from '../aset/promo.jpeg';
import Promo2 from '../aset/promo (2).jpeg';
import Promo3 from '../aset/promo (3).jpeg';
import Promo4 from '../aset/promo (4).jpeg';
import Promo5 from '../aset/promo (5).jpeg';

function CarouselFadeExample() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel fade interval={3000} activeIndex={index} onSelect={handleSelect} indicators={false} prevLabel={null} nextLabel={null}>
        <Carousel.Item className='my-4'>
          <img
            className="d-block w-100"
            src={Promo1}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Promo2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Promo3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Promo4}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Promo5}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default CarouselFadeExample;
