import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

type NewType = string;

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected host: NewType = 'https://api.gfsaude.com.br/api';
  // public basePath: string;
  public entityName: string;
  protected token = sessionStorage.getItem('token');


  private readonly newProperty = null;

  constructor(public http: HttpClient) { }

  protected headers(isFormData = false): HttpHeaders {
    const result: any = {

      'Content-Type': 'application/json'
    };

    if (isFormData) {
      delete result['Content-Type'];
    }

    // this.token = localStorage.getItem('token');
    // if (this.token) {
    //   result.Authorization = `bearer ${this.token}`;
    // }

    return new HttpHeaders(result);
  }

  protected options(isFormData = false): any {
    const headerOptions = this.headers(isFormData);
    return { headers: headerOptions };
  }

  getResources(params = {}) {
    return this.http.get(this.resourceUrl(null, params), this.options());
  }

  getResource(id, params = {}) {
    return this.http.get(this.resourceUrl(id, params), this.options());
  }

  createResource(data, params = {}) {
    let isFormData = false;

    if (data instanceof FormData) {
      isFormData = true;
    }

    return this.http.post(this.resourceUrl(null, params), data, this.options(isFormData));
  }

  updateResource(data, params = {}) {
    return this.http.put(this.resourceUrl(data.id, params), data, this.options());
  }

  deleteResource(id= this.newProperty) {
    return this.http.delete(this.resourceUrl(id), this.options());
  }

  resourceUrl(id = null, params = {}) {

    const endpoint = [
      this.host,
      this.urlParameters(params),
      this.entityName,
      id
    ].filter(element => element != false).join('/').replace(/\/$/, '');

    let url = endpoint + this.queryString(params);

    // tslint:disable-next-line: variable-name
    let client_id: any = localStorage.getItem("empresa_id");
    if (client_id) {
      if (url.indexOf("?") >= 0) url = url + "&"; else url = url + "?";
      url = url + "client_id=" + client_id;
    }

    return url;
  }

  protected urlParameters(params) {
    var urlParameters = []

    for (var placeholder in params) {
      if (/.*_id$/.test(placeholder)) {
        urlParameters.push(`${placeholder}/${params[placeholder]}`)
      }
    }

    return urlParameters.join('/')
  }

  protected queryString(params) {
    if (params.query) {
      return `?${params.query}`;
    }
    else if (params.router) {
      return `/${params.router}`;
    }
    else {
      return '';
    }
  }
}
