import { Cidade } from './../../shared/models/cidade.model';
import { Injectable } from '@angular/core';

const LS_CHAVE: string = "cidade"

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor() { }

  listarCidade(): Cidade[]{
    const cidades = localStorage[LS_CHAVE];
    return cidades ? JSON.parse(cidades) : []
  }

  inserir(cidade: Cidade): void {
    const cidades = this.listarCidade()
    cidade.id = new Date().getTime()
    cidades.push(cidade)
    localStorage[LS_CHAVE] = JSON.stringify(cidades)
  }

  buscarPorID(id: number): Cidade | undefined{
    const cidades: Cidade[] = this.listarCidade()
    return cidades.find(cidade => cidade.id === id)
  }

  atualizar(cidade: Cidade): void {
    const cidades: Cidade[] = this.listarCidade()

    cidades.forEach((obj, index, objs) =>{
      if(cidade.id === obj.id){
        objs[index] = cidade
      }
    })
    localStorage[LS_CHAVE] = JSON.stringify(cidades)
  }

  remover(id: number): void{
    let cidades: Cidade[] = this.listarCidade()
    cidades = cidades.filter(cidade => cidade.id !== id)
    localStorage[LS_CHAVE] = JSON.stringify(cidades)
  }
}
