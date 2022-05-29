import { Card, Grid, Box } from '@mui/material';

const OrderSummaryCard = ({ cartList }) => {
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
            32
          </Grid>
        </Grid>
      </Box>
      <Box p={2} pt={1}>
        <Grid container>
          <Grid item xs={6}>
            Estimated Shipping
          </Grid>
          <Grid item xs={6}>
            32
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
            32
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default OrderSummaryCard;
