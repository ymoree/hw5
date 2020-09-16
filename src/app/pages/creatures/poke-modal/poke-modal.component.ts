import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FirestoreService} from '../../../services/firestore.service';

@Component({
  selector: 'app-poke-modal',
  templateUrl: './poke-modal.component.html',
  styleUrls: ['./poke-modal.component.sass']
})
export class PokeModalComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    public firestore: FirestoreService
  ) {
    this.form = fb.group({
      id: fb.control(null),
      name: fb.control('',
        [Validators.required, Validators.minLength(2)]),
      url: fb.control('',
        [Validators.required, Validators.minLength(2)])
    });
  }

  updatePokemon = (): void => {
    this.firestore.updatePokemon(this.form.value);
    this.activeModal.close();
  }

  // name control and check if it is valid
  get nameControl(): any {
    return this.form.get('name');
  }

  get nameIsInvalid(): boolean {
    return this.nameControl.invalid && this.nameControl.dirty;
  }

  // url control and check if it is valid
  get urlControl(): any {
    return this.form.get('url');
  }

  get urlIsInvalid(): boolean {
    return this.urlControl.invalid && this.urlControl.dirty;
  }
}
