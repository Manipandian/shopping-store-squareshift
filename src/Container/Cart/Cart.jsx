import { Box, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { productsState } from '../../Store/Slices/productSlice';
import CartProductCard from '../../Component/CartProductCard/CartProductCard';
import OrderSummaryCard from '../../Component/OrderSummaryCard/OrderSummaryCard';
import CartCheckout from '../../Component/CartCheckout/CartCheckout';

const Cart = () => {
  const navigate = useNavigate();
  const { cartList } = useSelector(productsState);
  const backToAllSelection = () => navigate('/products/all');
  return (
    <Box
      p={2}
      pl={4}
      pr={4}
      sx={{
        backgroundColor: '#f5d5e7',
      }}
    >
      <Grid container spacing={3} justifyContent="space-between">
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
      <Grid container spacing={2} justifyContent="space-evenly">
        <Grid item xs={7}>
          {cartList.map((cart) => {
            return (
              <Box
                id="item-list"
                p={2}
                sx={{
                  height: '200px',
                  width: '100%',
                }}
              >
                <CartProductCard product={cart} />
              </Box>
            );
          })}
        </Grid>
        <Grid item xs={4}>
          <Box
            id="order-summary"
            p={2}
            sx={{
              height: '200px',
              width: '100%',
            }}
          >
            <OrderSummaryCard cartList={cartList} />
          </Box>
        </Grid>
        <Grid item xs={11}>
          <Box
            id="checkout-form"
            sx={{
              height: '200px',
            }}
          >
            <CartCheckout />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
