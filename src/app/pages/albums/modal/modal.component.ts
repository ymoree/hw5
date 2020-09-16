import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {FirestoreService} from '../../../services/firestore.service';


@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {
    form: FormGroup;

    constructor(
        public activeModal: NgbActiveModal,
        private fb: FormBuilder,
        public firestore: FirestoreService
    ) {
        this.form = fb.group({
            id: fb.control(null),
            name: fb.control('',
                [Validators.required, Validators.minLength(2)]),
            band: fb.control('',
                [Validators.required, Validators.minLength(2)]),
            genre: fb.control('',
                [Validators.required, Validators.minLength(2)]),
            label: fb.control('',
                [Validators.required, Validators.minLength(2)]),
            producer: fb.control('',
                [Validators.required, Validators.minLength(2)])
        });
    }

    ngOnInit(): void {
    }

    // Add new or edit existing album
    updateAlbum = (): void => {
        this.firestore.updateAlbum(this.form.value);
        this.activeModal.close();
    }

    // name control and check if it is valid
    get nameControl(): any {
        return this.form.get('name');
    }

    get nameIsInvalid(): boolean {
        return this.nameControl.invalid && this.nameControl.dirty;
    }

    // band control and check if it is valid
    get bandControl(): any {
        return this.form.get('band');
    }

    get bandIsInvalid(): boolean {
        return this.bandControl.invalid && this.bandControl.dirty;
    }

    // genre control and check if it is valid
    get genreControl(): any {
        return this.form.get('genre');
    }

    get genreIsInvalid(): boolean {
        return this.genreControl.invalid && this.genreControl.dirty;
    }

    // label control and check if it is valid
    get labelControl(): any {
        return this.form.get('label');
    }

    get labelIsInvalid(): boolean {
        return this.labelControl.invalid && this.labelControl.dirty;
    }

    // producer control and check if it is valid
    get producerControl(): any {
        return this.form.get('producer');
    }

    get producerIsInvalid(): boolean {
        return this.producerControl.invalid && this.producerControl.dirty;
    }
}
