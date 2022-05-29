import Box from '@mui/material/Box';

 
const DiscountLabel = ({ content }) => {
    return (
        <Box
            p={1}
            sx={{
                backgroundColor: '#1a7555',
                color: 'white',
                textAlign: 'center',
            }}
            >{content}</Box>
    )
}

export default DiscountLabel;