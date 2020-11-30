import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TarefasModule } from './tarefas';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { TransacaoComponent } from './transacao/transacao.component';

import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    TransacaoComponent,
    MenuComponent,
    CadastrarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TarefasModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
