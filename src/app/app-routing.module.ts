import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from './Components/Home/Home.component';
import { LoginComponent } from './Components/Login/Login.component';
import { AtualizarComponent } from './Components/Pedidos/atualizar/atualizar.component';
import { CriarComponent } from './Components/Pedidos/criar/criar.component';
import { DeletaComponent } from './Components/Pedidos/deleta/deleta.component';
import { DetalhesitensComponent } from './Components/Pedidos/detalhesitens/detalhesitens.component';
import { ListaComponent } from './Components/Pedidos/lista/lista.component';
import { SenhaComponent } from './Components/Senha/Senha.component';

const routes: Routes = [

  { path: '', component: AppComponent,
  children: [

    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'criar', component: CriarComponent },
    { path: 'deleta', component: DeletaComponent },
    { path: 'detalhesitens', component: DetalhesitensComponent },
    { path: 'lista', component: ListaComponent },
    { path: 'senha', component: SenhaComponent },
    { path: 'atualizar', component: AtualizarComponent},
    { path: '', redirectTo: 'login', pathMatch: 'full'},

  ],

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
