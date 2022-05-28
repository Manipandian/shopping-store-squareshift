import { Methods, HttpClient, SERVICES } from "./HttpClient";

export default class ProductsApi extends HttpClient {
    fetchProductData() {
        return this.request(
            Methods.GET,
            SERVICES.FAKER_STORE,
            'products'
        )
    };
    fetchProductCategory(category) {
        return this.request(
            Methods.GET,
            SERVICES.FAKER_STORE,
            `categories/${category}`
        )
    };
}