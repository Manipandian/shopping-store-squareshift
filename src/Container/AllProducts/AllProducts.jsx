import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  productsState,
  getProductList,
  getProductsForCategory,
  updateProductsList,
  updateCartList,
} from '../../Store/Slices/productSlice';
import ProductsList from '../../Component/ProductList/ProductList';

const AllProducts = () => {
  const dispatch = useDispatch();
  const { productCategory } = useParams();
  const { productsList, cartList } = useSelector(productsState);
  useEffect(() => {
    dispatch(updateProductsList([]));
    !Boolean(productCategory) || productCategory === 'all'
      ? dispatch(getProductList())
      : dispatch(getProductsForCategory(productCategory));
  }, [dispatch]);

  const addToCartClick = (product) => {
    const newCartList = [...cartList];
    let checkExistingCart = false;
    cartList.forEach((cart) => {
      if (cart.id === product.id) {
        checkExistingCart = true;
      }
    });
    !checkExistingCart && newCartList.push({ ...product, count: 1 });
    dispatch(updateCartList(newCartList));
  };

  return (
    <ProductsList products={productsList} addToCartClick={addToCartClick} />
  );
};

export default AllProducts;
