import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getLookbookImages } from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/LookbookCarousel.css'; // Create a separate CSS file for styling

const LookbookCarousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getLookbookImages().then(response => setImages(response.data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map(image => (
          <div key={image.id}>
            <img
              src={image.image}
              alt={image.caption}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LookbookCarousel;
