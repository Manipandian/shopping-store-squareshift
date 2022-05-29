import { Box, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProgressLoader from '../ProgressLoader/ProgressLoader';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ products, addToCartClick }) => {
  const navigate = useNavigate();
  const cardClickAction = (product) => {
    navigate(`/products/id/${product.id}`);
  };

  return (
    <Box
      p={4}
      sx={{
        backgroundColor: '#f5d5e7',
        height: '100%',
        minHeight: '80vh',
      }}
    >
      <ProgressLoader dataLoaded={Boolean(products.length)}>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {products.map((product) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={product.title}>
                <ProductCard
                  image={product.image}
                  title={product.title}
                  cardClickAction={() => cardClickAction(product)}
                >
                  <Grid container spacing={1} justifyContent="space-between">
                    <Grid item>
                      <Box
                        sx={{
                          fontSize: '1.5em',
                          fontWeight: '500',
                        }}
                      >{`$${product.price}`}</Box>
                    </Grid>
                    <Grid item>
                      <Button
                        onClick={() => addToCartClick(product)}
                        style={{
                          backgroundColor: '#2c6629',
                          color: 'white',
                        }}
                      >
                        Add To Cart
                      </Button>
                    </Grid>
                  </Grid>
                </ProductCard>
              </Grid>
            );
          })}
        </Grid>
      </ProgressLoader>
    </Box>
  );
};

export default ProductList;
