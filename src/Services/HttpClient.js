import axios from "axios";

export const Http = axios.create({});
export const Methods = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
    PUT: 'PUT',
    PATCH: 'PATCH',
  };

export const SERVICES = {
    FAKER_STORE: 'https://fakestoreapi.com/'
}

export class HttpClient {
    request = (method, baseURL, url, data) => {
        return Http({
            method,
            baseURL,
            url,
            header: { Accept: 'application/json' },
            data
        })
    }
}