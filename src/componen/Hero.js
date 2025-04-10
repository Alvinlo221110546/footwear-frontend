import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import hero1 from './../aset/hero.jpeg'
import hero2 from './../aset/hero (2).jpeg'
import hero3 from './../aset/hero (3).jpeg'

function Hero() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-black'>Mills</h3>
          <p className='text-black'>Kembali ke sekolah adalah awal dari petualangan baru. Dapatkan ilmu, temukan bakat tersembunyi, dan jadilah pahlawan cerita pendidikanmu sendiri.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='text-black'>Enerma x Cushion</h3>
          <p className='text-black'>Langkah dengan gaya dan kenyamanan. Temukan koleksi sepatu terbaru kami yang dirancang untuk menjadikan setiap langkah Anda lebih baik.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className='text-black'>Jogosala Vicious</h3>
          <p className='text-black'>Menampilkan desain yang modern dan bahan berkualitas, sepatu kami memberikan keseimbangan sempurna antara gaya, kenyamanan, dan keandalan.</p>
        </Carousel.Caption>   
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;