import { Methods, HttpClient, SERVICES } from './HttpClient';

export default class ProductsApi extends HttpClient {
  fetchProductData() {
    return this.request(Methods.GET, SERVICES.FAKER_STORE, 'products');
  }

  fetchCategories() {
    return this.request(
      Methods.GET,
      SERVICES.FAKER_STORE,
      `products/categories/`
    );
  }

  fetchProductsForCategory(category) {
    return this.request(
      Methods.GET,
      SERVICES.FAKER_STORE,
      `products/category/${category}`
    );
  }

  fetchProductDetails(id) {
    return this.request(Methods.GET, SERVICES.FAKER_STORE, `products/${id}`);
  }
}
