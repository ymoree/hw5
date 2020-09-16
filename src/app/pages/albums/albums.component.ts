import {Component, Input, OnInit} from '@angular/core';
import {AlbumsService} from '../../services/albums.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DeleteModalComponent} from './delete-modal/delete-modal.component';
import {ModalComponent} from './modal/modal.component';

@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.sass']
})
export class AlbumsComponent implements OnInit {
    @Input() public id;

    constructor(
        public albumsService: AlbumsService,
        private modalService: NgbModal) {}

    ngOnInit(): any {
        // Get albums from db
        this.albumsService.fetchAlbums();
    }

    // Open modal window with from
    openModal(album?): void {
        const modalRef = this.modalService.open(ModalComponent);
        if (album) {
            modalRef.componentInstance.form.patchValue(album);
        }
    }

    // Open modal window with delete confirmation
    openDeleteModal(album): void {
        const modalRef = this.modalService.open(DeleteModalComponent);
        modalRef.componentInstance.id = album.id;
    }
}
