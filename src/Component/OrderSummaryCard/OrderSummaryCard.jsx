import { Card, Grid, Box } from '@mui/material';

const OrderSummaryCard = ({ cartList }) => {
  let subTotal = 0;
  const shippingCost = 5.9;
  const total = subTotal + shippingCost;
  cartList.forEach((prod) => {
    const prodCost = Number(prod.price) * Number(prod.count);
    subTotal = subTotal + prodCost;
  });
  return (
    <Card sx={{ width: '100%', height: '100%', padding: '10px' }}>
      <Box p={2}>
        <h3>ORDER SUMMARY</h3>
      </Box>
      <hr />
      <Box p={2} pb={1}>
        <Grid container>
          <Grid item xs={6}>
            Subtotal
          </Grid>
          <Grid item xs={6}>
            {`$ ${subTotal}`}
          </Grid>
        </Grid>
      </Box>
      <Box p={2} pt={1}>
        <Grid container>
          <Grid item xs={6}>
            Estimated Shipping
          </Grid>
          <Grid item xs={6}>
            {`$ ${shippingCost}`}
          </Grid>
        </Grid>
      </Box>
      <hr />
      <Box p={2}>
        <Grid container>
          <Grid item xs={6}>
            Total
          </Grid>
          <Grid item xs={6}>
            {`$ ${total}`}
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default OrderSummaryCard;
