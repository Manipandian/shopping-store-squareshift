import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { productsState } from '../../Store/Slices/productSlice';
import HeaderNavBar from '../../Component/HeaderNavBar/HeaderNavBar';
import DiscountLabel from '../../Component/DiscountLabel/DiscountLabel';
import { PRODUCT_TABS, USER_TABS } from '../../Constants/menu';
import { ROUTE_PATH } from '../../Constants/routePath';
import HomeRoutes from '../HomeRoutes/HomeRoutes';

const MainHeader = () => {
  const navigate = useNavigate();
  const { cartList } = useSelector(productsState);
  const [discountLabelContent, setDiscountLabelContent] = useState(
    'Super Deal Free shipping on Order Above $50'
  );

  const handleMenuSelection = (tab) => {
    if (tab === PRODUCT_TABS.HOME) navigate(ROUTE_PATH.HOME);
    else if (tab === PRODUCT_TABS.All_PRODUCT) navigate('/products/all');
    else if (tab === PRODUCT_TABS.CATEGORY) navigate(ROUTE_PATH.CATEGORY);
    else if (tab === USER_TABS.CART) navigate(ROUTE_PATH.CART);
  };
  return (
    <>
      <HeaderNavBar
        productTabs={PRODUCT_TABS}
        userTabs={USER_TABS}
        handleMenuSelection={handleMenuSelection}
        cartCount={cartList.lengh}
      />
      {Boolean(discountLabelContent) && (
        <DiscountLabel content={discountLabelContent} />
      )}
      <HomeRoutes />
    </>
  );
};

export default MainHeader;
