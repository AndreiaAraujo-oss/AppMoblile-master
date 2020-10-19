import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class EvoCrudService  extends BaseService {

constructor(
   public http: HttpClient) {
     super(http);
    }

}


// Chamado o HTTP (GET, POST, PUT, DELET)
// HttpClient É UM PACOTE DO ANGULAR QUE AJUDA A FAZER AS REQUISIÇÕES
// BaseService A ONDE VAI TER TODAS AS NOSSAS CLASSES DO GET, PUT, POST E DELETE
