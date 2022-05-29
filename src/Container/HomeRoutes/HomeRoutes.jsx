import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTE_PATH } from '../../Constants/routePath';
import Category from '../Category/Category';
import AllProducts from '../AllProducts/AllProducts';
import ProductDetails from '../ProductDetails/ProductDetails';
import Cart from '../Cart/Cart';

const HomeRoutes = () => {
  return (
    <Routes>
      {/* <Route path='/' render={() => <Navigate  to={ROUTE_PATH.HOME}/>}></Route> */}
      <Route path={ROUTE_PATH.HOME} element={<AllProducts />} />
      <Route path={ROUTE_PATH.PRODUCTS} element={<AllProducts />} />
      <Route path={ROUTE_PATH.CATEGORY} element={<Category />} />
      <Route path={ROUTE_PATH.PRODUCTDETAILS} element={<ProductDetails />} />
      <Route path={ROUTE_PATH.CART} element={<Cart />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default HomeRoutes;
