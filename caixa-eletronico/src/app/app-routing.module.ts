import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { ClienteComponent } from './cliente/cliente.component';
import { MenuComponent } from './menu/menu.component';
import { TransacaoComponent } from './transacao/transacao.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';

export const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'cliente', component: ClienteComponent},
  { path: 'editarcliente/:id', component: EditarClienteComponent},
  { path: '', component: MenuComponent},
  { path: 'transacao', component: TransacaoComponent},
  { path: 'cadastrar-cliente', component: CadastrarClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
