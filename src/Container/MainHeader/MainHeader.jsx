import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HeaderNavBar from '../../Component/HeaderNavBar/HeaderNavBar';
import DiscountLabel from '../../Component/DiscountLabel/DiscountLabel';
import {
  mainHeaderState,
  updateCurrentTab,
} from '../../Store/Slices/mainHeaderSlice';
import { PRODUCT_TABS, USER_TABS } from '../../Constants/menu';
import { ROUTE_PATH } from '../../Constants/routePath';
import HomeRoutes from '../HomeRoutes/HomeRoutes';

const MainHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentTab } = useSelector(mainHeaderState);
  const [discountLabelContent, setDiscountLabelContent] = useState(
    'Super Deal Free shipping on Order Above $50'
  );

  const handleMenuSelection = (tab) => {
    console.log('current tab', tab);
    dispatch(updateCurrentTab(tab));
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
      />
      {Boolean(discountLabelContent) && (
        <DiscountLabel content={discountLabelContent} />
      )}
      <HomeRoutes />
    </>
  );
};

export default MainHeader;
