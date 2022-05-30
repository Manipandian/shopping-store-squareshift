import { HttpClient, Methods, SERVICES } from './HttpClient';

export default class LoginApi extends HttpClient {
  getUsersData() {
    return this.request(Methods.GET, SERVICES.FAKER_STORE, 'users');
  }
}
