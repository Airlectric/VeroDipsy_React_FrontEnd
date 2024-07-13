import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getProducts } from '../services/api';
import { Link } from 'react-router-dom'; // Ensure you're using react-router-dom for navigation
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '2rem',
  },
  button: {
    marginTop: '2rem',
  },
});

const Home = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(response => setProducts(response.data));
  }, []);

  return (
    <div>
      <Hero />
      <div className={classes.root}>
        <Grid container spacing={3}>
          {products.slice(0, 3).map(product => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
        <Link to="/products">
          <Button variant="contained" color="primary" className={classes.button}>
            View More
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
