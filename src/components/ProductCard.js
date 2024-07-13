import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

const ProductCard = ({ product }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <Typography variant="h6">
          ${product.price}
        </Typography>
        <Button size="small" color="primary">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
