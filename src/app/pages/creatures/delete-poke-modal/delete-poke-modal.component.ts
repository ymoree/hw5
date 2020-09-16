import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FirestoreService} from '../../../services/firestore.service';

@Component({
  selector: 'app-delete-poke-modal',
  templateUrl: './delete-poke-modal.component.html',
  styleUrls: ['./delete-poke-modal.component.sass']
})
export class DeletePokeModalComponent {
  id: string;

  constructor(
    public activeModal: NgbActiveModal,
    public firestore: FirestoreService) {}

  deleteAlbum(): void {
    this.firestore.deletePokemon(this.id);
    this.activeModal.close();
  }
}
