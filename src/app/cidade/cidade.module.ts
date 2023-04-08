
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirCidadesComponent } from './inserir-cidades/inserir-cidades.component';
import { CidadeService } from './services/cidade.service';
import { ListarCidadesComponent } from './listar-cidades/listar-cidades.component';
import { EditarCidadesComponent } from './editar-cidades/editar-cidades.component';



@NgModule({
  declarations: [
    InserirCidadesComponent,
    ListarCidadesComponent,
    EditarCidadesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    CidadeService
  ]
})
export class CidadeModule { }
