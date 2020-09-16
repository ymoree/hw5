import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FirestoreService} from '../../../services/firestore.service';

@Component({
    selector: 'app-delete-modal',
    templateUrl: './delete-modal.component.html',
    styleUrls: ['./delete-modal.component.sass']
})
export class DeleteModalComponent implements OnInit {
    id: string;

    constructor(
        public activeModal: NgbActiveModal,
        public firestore: FirestoreService) {}

    ngOnInit(): void {
    }

    deleteAlbum(): void {
        this.firestore.deleteAlbum(this.id);
        this.activeModal.close();
    }
}
