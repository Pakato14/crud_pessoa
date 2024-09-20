import { EnderecoService } from './../services/endereco.service';
import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/shared/models/endereco.model';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrls: ['./listar-endereco.component.css']
})
export class ListarEnderecoComponent implements OnInit {

  enderecos: Endereco[] = []

  constructor(
    private enderecoService: EnderecoService
  ) { }

  ngOnInit(): void {
    this.enderecos = this.listarEndereco()
  }

  listarEndereco(): Endereco[]{
    return this.enderecoService.listarTodos();
  }

  remover($event: any, endereco: Endereco): void {
    $event.preventDefault();
    if(confirm(`Deseja realmente remover a pessoa ${endereco.rua}?`)){
      this.enderecoService.remover(endereco.id!);
      this.enderecos = this.listarEndereco()
    }
  }

}
