import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getProducts } from '../services/api';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '2rem',
  },
});

const Products = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(response => setProducts(response.data));
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Products;
