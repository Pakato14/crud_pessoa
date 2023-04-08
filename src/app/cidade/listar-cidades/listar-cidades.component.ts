import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../services/cidade.service';
import { Cidade } from 'src/app/shared/models/cidade.model';

@Component({
  selector: 'app-listar-cidades',
  templateUrl: './listar-cidades.component.html',
  styleUrls: ['./listar-cidades.component.css']
})
export class ListarCidadesComponent implements OnInit {

  cidades: Cidade[] = []

  constructor(private cidadeService: CidadeService) { }

  ngOnInit(): void {
    this.cidades = this.listarCidades();
  }

  listarCidades(): Cidade[]{
    return this.cidadeService.listarCidade();
  }

}
