import { Grid, Box, Card } from '@mui/material';

const CartProductCard = ({ product }) => {
  return (
    <Card sx={{ width: '100%', height: '100%', padding: '10px' }}>
      <Grid container spacing={2} justifyContent="space-evenly">
        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
          <img
            src={product.image}
            alt={product.id}
            height="200px"
            width="auto"
          />
        </Grid>
        <Grid item xs={7}>
          <Box>
            <strong>Product:</strong>
            {` ${product.title}`}
          </Box>
          <Box>
            <strong>Product ID:</strong>
            {` ${product.id}`}
          </Box>
          <Box>
            <strong>Qty</strong>
            {` ${product.count}`}
          </Box>
          <Box>
            <strong>Price</strong>
            {` ${product.price}`}
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};
export default CartProductCard;
