import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import {PokemonService} from './pokemon.service';
import {first, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  showSpinner = true;

  constructor(
    private firestore: AngularFirestore,
    private toastr: ToastrService,
    public pokemonService: PokemonService
  ) {}

  // Get albums from db
  getAlbums(): any {
    return this.firestore
      .collection('albums')
      .snapshotChanges();
  }

  // Delete album
  deleteAlbum(id): void {
    this.firestore
      .doc('albums/' + id)
      .delete();
    this.toastr.warning('Album was deleted successfully', 'Notification');
  }

  // Add new or edit existing album
  updateAlbum(album): void {
    const {id, ...payload} = album;
    if (id) {
      this.firestore
        .collection('albums')
        .doc(id)
        .set(payload);
      this.toastr.warning('Album was updated successfully', 'Notification');
    } else {
      this.firestore
        .collection('albums')
        .add(payload);
      this.toastr.info('Album was added successfully', 'Notification');
    }
  }

  // add pokemons to firestore
  addPokeDataToFirestore(): void {
    this.pokemonService.items.forEach((obj) => {
      this.firestore
        .collection('pokemons').add({
        name: obj.name,
        url: obj.url
      });
    });
  }

  fetchPokemonList(): Observable<object> {
    return this.pokemonService.fetchPokemons().pipe(
      tap(itemsList => {
        this.pokemonService.items = itemsList.results;
        this.addPokeDataToFirestore();
      }),
      first()
    );
  }

  // get pokemons
  fetchPokeFromFirestore = (): any => {
    this.getPokemons()
      .subscribe(albumsList => {
        if (albumsList.length) {
          this.setPokemons(albumsList);
        } else {
          this.fetchPokemonList()
            .subscribe(() => this.setPokemons(albumsList));
        }
        this.showSpinner = false;
      });
  }

  setPokemons(albumsList: any[]): void {
    this.pokemonService.pokemons = albumsList.map(item => ({
      id: item.payload.doc.id,
      ...item.payload.doc.data(),
    }));
  }

  // get pokemons from firestore
  getPokemons(): any {
    return this.firestore
      .collection('pokemons')
      .snapshotChanges();
  }

  // delete pokemon
  deletePokemon(id): void {
    this.firestore
      .doc('pokemons/' + id)
      .delete();
    this.toastr.error('Pokemon was deleted successfully', 'Notification');
  }

  // add or edit pokemon
  updatePokemon(pokemon): void {
    const {id, ...payload} = pokemon;
    if (id) {
      this.firestore
        .collection('pokemons')
        .doc(id)
        .set(payload);
      this.toastr.info('Pokemon was updated successfully', 'Notification');
    } else {
      this.firestore
        .collection('pokemons')
        .add(payload);
      this.toastr.info('Pokemon was added successfully', 'Notification');
    }
  }
}
