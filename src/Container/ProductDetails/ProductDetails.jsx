import { Box, Grid, Button, ButtonGroup } from '@mui/material';
import ProgressLoader from '../../Component/ProgressLoader/ProgressLoader';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  updateSelectedProduct,
  productsState,
  getProductDetails,
  updateCartList,
} from '../../Store/Slices/productSlice';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { selectedProductData, cartList } = useSelector(productsState);
  const [productCount, setProductCount] = useState(1);
  useEffect(() => {
    dispatch(updateSelectedProduct({}));
    dispatch(getProductDetails(productId));
  }, [dispatch, productId]);

  const addToCartClick = () => {
    //Needs to implement this logic while doing api integration
    // cartList.map((cart) => {
    //     if(cart.id === selectedProductData.id) {
    //         cart.count = productCount;
    //     }
    //     return cart;
    // });
    const newCartList = [
      ...cartList,
      { ...selectedProductData, count: productCount },
    ];
    dispatch(updateCartList(newCartList));
  };

  return (
    <Box
      p={13}
      sx={{
        backgroundColor: '#f5d5e7',
        height: '100%',
        minHeight: '80vh',
      }}
    >
      <ProgressLoader dataLoaded={Boolean(selectedProductData.id)}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <img
              src={selectedProductData.image}
              alt="Girl in a jacket"
              height="400px"
            ></img>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box p={2}>
              <h2 id="title">{selectedProductData.title}</h2>
            </Box>
            <Box p={2}>
              <p id="description">{selectedProductData.description}</p>
            </Box>
            <Box
              p={2}
              sx={{
                fontSize: '1.5em',
                fontWeight: '500',
              }}
            >
              {`$${selectedProductData.price}`}
            </Box>
            <Box p={2}>
              <Grid item>
                <Grid container spacing={1} justifyContent="space-between">
                  <Grid item>
                    <ButtonGroup aria-label="small outlined button group">
                      <Button onClick={() => setProductCount(1 + productCount)}>
                        +
                      </Button>
                      <Button disabled>{productCount}</Button>
                      <Button onClick={() => setProductCount(1 + productCount)}>
                        -
                      </Button>
                    </ButtonGroup>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={() => addToCartClick()}
                      style={{
                        backgroundColor: '#2c6629',
                        color: 'white',
                      }}
                    >
                      Add To Cart
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </ProgressLoader>
    </Box>
  );
};

export default ProductDetails;
