import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getHeroContent } from '../services/api'; 
import '../styles/Hero.css'; // Import your custom CSS

const Hero = () => {
  const [heroContent, setHeroContent] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchHeroContent();
  }, []);

  const fetchHeroContent = async () => {
    try {
      const response = await getHeroContent();
      if (response.data && response.data.length > 0) {
        setHeroContent(response.data[0]);
      }
    } catch (error) {
      console.error('Error fetching hero content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="hero-container d-flex flex-column justify-content-center align-items-center text-center text-white"
      style={{
        backgroundImage: `url(${heroContent.background_image})`,
      }}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="display-4 font-weight-bold mb-3 animate__animated animate__fadeInDown">
          {heroContent.headline}
        </h1>
        <h2 className="h5 mb-4 animate__animated animate__fadeInUp">
          {heroContent.subheadline}
        </h2>
        
      </div>
    </div>
  );
};

export default Hero;
