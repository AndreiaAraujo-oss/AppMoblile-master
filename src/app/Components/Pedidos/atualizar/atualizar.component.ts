import { Component, OnInit } from '@angular/core';
import { EvoCrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {

  public convenios;
  public hospitais;
  public entity: any = {};
  id: any;

  // this.id = this.Router.snapshot.paramMap.get('id');
  // this.crudService.getById(this.Router.snapshot.paramMap.get('id')).subscribe(res => {
  //   console.log(res);
  // });


  constructor(
    public service: EvoCrudService
  ) { }

  ngOnInit(): void {
    this.getConvenios();
    this.getHospitais();
  }


  getConvenios() {
    this.service.entityName = 'convenio';
    this.service.getResources().subscribe((response: any) => {
      this.convenios = response.data;
    });
  }

  getHospitais() {
    this.service.entityName = 'hospital';
    this.service.getResources().subscribe((response: any) => {
      this.hospitais = response.data;
    });
  }

  saveData() {
    this.service.entityName = 'pedido';
    this.service.createResource(this.entity).subscribe( response => {
      console.log(response);
    });
  }

}

