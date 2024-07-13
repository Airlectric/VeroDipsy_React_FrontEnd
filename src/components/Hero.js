import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getHeroContent, createHeroContent, updateHeroContent, deleteHeroContent } from '../services/api'; 

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

  const handleCreate = async (data) => {
    try {
      const response = await createHeroContent(data);
      setHeroContent(response.data);
    } catch (error) {
      console.error('Error creating hero content:', error);
    }
  };

  const handleUpdate = async (id, data) => {
    try {
      const response = await updateHeroContent(id, data);
      setHeroContent(response.data);
    } catch (error) {
      console.error('Error updating hero content:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteHeroContent(id);
      setHeroContent({});
    } catch (error) {
      console.error('Error deleting hero content:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="container-fluid d-flex flex-column justify-content-center align-items-center text-center text-white"
      style={{
        position: 'relative',
        height: '80vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${heroContent.background_image})`,
        padding: '0 1rem',
      }}
    >
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8">
          <h1 className="display-4 font-weight-bold mb-3">
            {heroContent.headline}
          </h1>
          <h2 className="h5 mb-4">
            {heroContent.subheadline}
          </h2>
          {/* Uncomment the button below if needed */}
          {/* <Button variant="success" size="lg">
            Shop Now
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
