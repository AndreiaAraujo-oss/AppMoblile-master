import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './Components/Home/Home.component';
import { LoginComponent } from './Components/Login/Login.component';
import { AtualizarComponent } from './Components/Pedidos/atualizar/atualizar.component';
import { SenhaComponent } from './Components/Senha/Senha.component';
import { CriarComponent } from './Components/Pedidos/criar/criar.component';
import { DeletaComponent } from './Components/Pedidos/deleta/deleta.component';
import { DetalhesitensComponent } from './Components/Pedidos/detalhesitens/detalhesitens.component';
import { ListaComponent } from './Components/Pedidos/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AtualizarComponent,
    CriarComponent,
    DeletaComponent,
    DetalhesitensComponent,
    ListaComponent,
    SenhaComponent,
    HttpClientModule


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
