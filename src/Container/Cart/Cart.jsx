import { Box, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { productsState } from '../../Store/Slices/productSlice';

const Cart = () => {
  const navigate = useNavigate();
  const { cartList } = useSelector(productsState);
  const backToAllSelection = () => navigate('/products/all');
  return (
    <Box
      p={2}
      sx={{
        backgroundColor: '#f5d5e7',
      }}
    >
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item>
          <Box
            sx={{
              fontSize: '16px',
              fontWeight: '600',
            }}
          >{`Shopping Cart(${cartList.length})`}</Box>
        </Grid>
        <Grid item>
          <Button onClick={backToAllSelection}>Continue Shopping</Button>
        </Grid>
      </Grid>
      <Grid>
        <Box id="item-list"></Box>
        <Box id="order-summary"></Box>
        <Box id="checkout-form"></Box>
      </Grid>
    </Box>
  );
};

export default Cart;
