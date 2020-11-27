import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { MenuComponent } from './menu/menu.component';
import { TransacaoComponent } from './transacao/transacao.component';

export const routes: Routes = [
  { path: 'cliente', component: ClienteComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'transacao', component: TransacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
