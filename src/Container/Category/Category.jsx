 
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { categoryState, getCategory } from '../../Store/Slices/categorySlice';
import { Box, Grid } from '@mui/material';
import ProductCard from "../../Component/ProductCard/ProductCard";
import ProgressLoader from "../../Component/ProgressLoader/ProgressLoader";

const categoryImageLinks = [
    'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg'
]

const Category = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { category } = useSelector(categoryState);
    useEffect(() => {
        dispatch(getCategory());
    }, [dispatch]);

    const cardClickAction = (type) => {
        navigate(`/products/${type}`);
    };

    return (
        <Box p={4} sx={{
            backgroundColor: '#f5d5e7',
            height: '100%',
            minHeight: '80vh'
        }}>
            <ProgressLoader dataLoaded={Boolean(category.length)}>
                <Grid
                    container
                    spacing={3}
                    direction="row" 
                    justify="flex-start" 
                    alignItems="flex-start"
                >
                    {
                        category.map((type, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={type}>
                                    <ProductCard 
                                        image={categoryImageLinks[index]}
                                        title={type}
                                        cardClickAction={() => cardClickAction(type)}
                                    />
                                 </Grid>
                            )
                        })
                    }
                </Grid>
            </ProgressLoader>
        </Box>
    )
}

export default Category;