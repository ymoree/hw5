import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AlbumsRoutingModule} from './albums-routing.module';
import {DeleteModalComponent} from './delete-modal/delete-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ModalComponent} from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [DeleteModalComponent, ModalComponent]
})
export class AlbumsModule {
}
