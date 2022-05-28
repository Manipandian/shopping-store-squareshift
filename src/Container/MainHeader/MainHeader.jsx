import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import HeaderNavBar from '../../Component/HeaderNavBar/HeaderNavBar';
import { productsState, getProductList } from "../../Store/productSlice";

const MainHeader = () => {
    const dispatch = useDispatch();
    const { productsList } = useSelector(productsState)

    //To fetch list of products on initial rendering
    useEffect(() => {
        dispatch(getProductList());
    }, [dispatch]);

    console.log('product list', productsList);
    return (
        <div><HeaderNavBar/></div>
    )
}

export default MainHeader;