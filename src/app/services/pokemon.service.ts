import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PokemonService {
  constructor(private httpClient: HttpClient) { }

  async getPokemonList(limit: number, offset: number) {
    let promiseGetPokemon = await this.httpClient.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).toPromise();
    console.log(promiseGetPokemon);
  }

}
