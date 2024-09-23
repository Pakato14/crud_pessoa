import { LoginRoutes } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { EditarCidadesComponent } from './cidade/editar-cidades/editar-cidades.component';
import { InserirCidadesComponent } from './cidade/inserir-cidades/inserir-cidades.component';
import { ListarCidadesComponent } from './cidade/listar-cidades/listar-cidades.component';
import { EditarEnderecoComponent } from './endereco/editar-endereco/editar-endereco.component';
import { InserirEnderecoComponent } from './endereco/inserir-endereco/inserir-endereco.component';
import { ListarEnderecoComponent } from './endereco/listar-endereco/listar-endereco.component';
import { HomeComponent } from './home/home.component';
import { EditarPessoaComponent } from './pessoa/editar-pessoa/editar-pessoa.component';
import { InserirPessoaComponent } from './pessoa/inserir-pessoa/inserir-pessoa.component';
import { ListarPessoaComponent } from './pessoa/listar-pessoa/listar-pessoa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'pessoas', redirectTo: 'pessoas/listar' },
  { path: 'pessoas/listar', component: ListarPessoaComponent, canActivate: [AuthGuard], data: { role: 'ADMIN,GERENTE,FUNC'} },
  { path: 'pessoas/novo', component: InserirPessoaComponent, canActivate: [AuthGuard], data: { role: 'ADMIN,GERENTE,FUNC'} },
  { path: 'pessoas/editar/:id', component: EditarPessoaComponent, canActivate: [AuthGuard], data: { role: 'ADMIN,GERENTE,FUNC'} },

  //home
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: { role: 'ADMIN,GERENTE,FUNC'} },

 // { path: 'cidades', redirectTo: 'cidades/listar' },
  { path: 'cidades/listar', component: ListarCidadesComponent, canActivate: [AuthGuard], data: { role: 'GERENTE'} },
  { path: 'cidades/novo', component: InserirCidadesComponent, canActivate: [AuthGuard], data: { role: 'GERENTE'} },  
  { path: 'cidades/editar/:id', component: EditarCidadesComponent, canActivate: [AuthGuard], data: { role: 'GERENTE'} },
  
  //Endereço
  { path: 'endereco/listar', component: ListarEnderecoComponent, canActivate: [AuthGuard], data: { role: 'ADMIN,GERENTE'} },
  { path: 'endereco/novo', component: InserirEnderecoComponent, canActivate: [AuthGuard], data: { role: 'ADMIN,GERENTE'} },  
  { path: 'endereco/editar/:id', component: EditarEnderecoComponent, canActivate: [AuthGuard], data: { role: 'ADMIN,GERENTE'} },


  ...LoginRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
