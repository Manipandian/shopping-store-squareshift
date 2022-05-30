import { Card, Box } from '@mui/material';
import { CardActionArea, CardActions } from '@mui/material';

const ProductCard = ({ image, title, cardClickAction, children }) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea onClick={cardClickAction}>
        <Box
          pt={1}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={image}
            alt="Girl in a jacket"
            width="auto"
            height="300"
          ></img>
        </Box>
        <Box p={1} sx={{ height: '40px' }}>
          <h3>{title}</h3>
        </Box>
      </CardActionArea>
      {children && <CardActions>{children}</CardActions>}
    </Card>
  );
};

export default ProductCard;
