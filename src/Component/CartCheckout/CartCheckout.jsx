import { Card, Button, Box, Grid, TextField } from '@mui/material';

const CartCheckout = () => {
  return (
    <Card sx={{ width: '100%', height: '100%', padding: '10px' }}>
      <form>
        <Box sx={{ fontSize: '20px', fontWeight: '600', pb: 1 }}>Checkout</Box>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={5}>
            <TextField label="Contact Number" variant="outlined" fullWidth />
          </Grid>
        </Grid>
        <Box pt={2} pb={2}>
          Delivery Address
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField label="Address Line 1" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Address Line 2" variant="outlined" fullWidth />
          </Grid>
        </Grid>
        <Box pt={2} pb={2} />
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField label="City" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={3}>
            <TextField label="State" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Pin Code" variant="outlined" fullWidth />
          </Grid>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <Box p={2}>
                <Button variant="contained">Checkout</Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};

export default CartCheckout;
