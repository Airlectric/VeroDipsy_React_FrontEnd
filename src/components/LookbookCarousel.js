import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@material-ui/core/styles';
import { getLookbookImages } from '../services/api';

const useStyles = makeStyles({
  root: {
    margin: "2rem 0",
  },
  image: {
    width: "100%",
    height: "auto",
  },
});

const LookbookCarousel = () => {
  const classes = useStyles();
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
    <div className={`${classes.root} container`}>
      <Slider {...settings}>
        {images.map(image => (
          <div key={image.id}>
            <img
              src={image.image}
              alt={image.caption}
              className={classes.image}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LookbookCarousel;
