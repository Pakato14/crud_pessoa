import { EditarCidadesComponent } from './cidade/editar-cidades/editar-cidades.component';
import { InserirCidadesComponent } from './cidade/inserir-cidades/inserir-cidades.component';
import { ListarCidadesComponent } from './cidade/listar-cidades/listar-cidades.component';
import { EditarPessoaComponent } from './pessoa/editar-pessoa/editar-pessoa.component';
import { InserirPessoaComponent } from './pessoa/inserir-pessoa/inserir-pessoa.component';
import { ListarPessoaComponent } from './pessoa/listar-pessoa/listar-pessoa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pessoas/listar', pathMatch: 'full' },
  { path: 'pessoas', redirectTo: 'pessoas/listar' },
  { path: 'pessoas/listar', component: ListarPessoaComponent },
  { path: 'pessoas/novo', component: InserirPessoaComponent },
  { path: 'pessoas/editar/:id', component: EditarPessoaComponent },

 // { path: 'cidades', redirectTo: 'cidades/listar' },
  { path: 'cidades/listar', component: ListarCidadesComponent},
  { path: 'cidades/novo', component: InserirCidadesComponent },  
  { path: 'cidades/editar/:id', component: EditarCidadesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
