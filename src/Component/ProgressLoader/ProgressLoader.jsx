import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ProgressLoader = ({ dataLoaded, children }) => {
  if (dataLoaded) {
    return children;
  } else {
    return (
      <Box
        sx={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}
      >
        <CircularProgress />
      </Box>
    );
  }
};

export default ProgressLoader;
