import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AlbumsComponent } from './pages/albums/albums.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { CreaturesComponent } from './pages/creatures/creatures.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlbumsModule } from './pages/albums/albums.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { DeletePokeModalComponent } from './pages/creatures/delete-poke-modal/delete-poke-modal.component';
import { PokeModalComponent } from './pages/creatures/poke-modal/poke-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    CreaturesComponent,
    DeletePokeModalComponent,
    PokeModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AlbumsModule,
    HttpClientModule
  ],
  providers: [ HttpService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
