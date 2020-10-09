import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected host: string = 'http://api.gfsaude.com.br/api_nova';
  public entityName: string;
  protected token = sessionStorage

constructor() { }

}
