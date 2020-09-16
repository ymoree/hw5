import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  items: any = [];
  pokemons: any = [];

  constructor(private httpService: HttpService){}

  fetchPokemons(): Observable<any> {
    return this.httpService.getData();
  }
}
