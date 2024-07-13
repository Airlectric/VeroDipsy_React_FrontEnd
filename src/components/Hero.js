import React, { useEffect, useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getHeroContent, createHeroContent, updateHeroContent, deleteHeroContent } from '../services/api'; 

const useStyles = makeStyles((theme) => ({
  hero: {
    position: 'relative',
    height: '80vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center',
    padding: '0 1rem',
  },
  headline: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  subheadline: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
  },
  ctaButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#45A049',
    }
  }
}));

const Hero = () => {
  const classes = useStyles();
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
      className={`${classes.hero} container-fluid`}
      style={{ backgroundImage: `url(${heroContent.background_image})` }}
    >
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8">
          <Typography variant="h3" className={classes.headline}>
            {heroContent.headline}
          </Typography>
          <Typography variant="h5" className={classes.subheadline}>
            {heroContent.subheadline}
          </Typography>
          {/* Uncomment the button below if needed */}
          {/* <Button variant="contained" className={classes.ctaButton}>
            Shop Now
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
