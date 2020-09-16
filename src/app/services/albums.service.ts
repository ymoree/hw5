import {Injectable} from '@angular/core';
import {FirestoreService} from './firestore.service';

@Injectable({
    providedIn: 'root'
})
export class AlbumsService {
    albums: Array<any> = [];
    showSpinner = true;

    constructor(private firestore: FirestoreService) {}

    // Get albums and stop showing spinner
    fetchAlbums = (): any => {
        this.firestore
            .getAlbums()
            .subscribe(albumsList => {
                this.albums = albumsList.map(item => {
                    this.showSpinner = false;
                    return {
                        id: item.payload.doc.id,
                        ...item.payload.doc.data(),
                    };
                });
            });
    }
}
