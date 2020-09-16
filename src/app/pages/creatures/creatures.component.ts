import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../../services/pokemon.service';
import {FirestoreService} from '../../services/firestore.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PokeModalComponent} from './poke-modal/poke-modal.component';
import {DeletePokeModalComponent} from './delete-poke-modal/delete-poke-modal.component';

@Component({
  selector: 'app-creatures',
  templateUrl: './creatures.component.html',
  styleUrls: ['./creatures.component.sass'],
})
export class CreaturesComponent implements OnInit {

  constructor(
    public pokemonService: PokemonService,
    public firestore: FirestoreService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.firestore.fetchPokeFromFirestore();
  }

  // Open modal window with from
  openModal(pokemon?): void {
    const modalRef = this.modalService.open(PokeModalComponent);
    if (pokemon) {
      modalRef.componentInstance.form.patchValue(pokemon);
    }
  }

  // Open modal window with delete confirmation
  openDeleteModal(pokemon): void {
    const modalRef = this.modalService.open(DeletePokeModalComponent);
    modalRef.componentInstance.id = pokemon.id;
  }
}
