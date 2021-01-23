import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

import { DogsService } from "../services/dogs.service";
import { SubBreedsComponent } from '../components/sub-breeds/sub-breeds.component';
import { CustomSearchComponent } from '../components/custom-search/custom-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SubBreedsComponent,
    CustomSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [
    DogsService
  ],
  bootstrap: [
    AppComponent,
    SubBreedsComponent,
    CustomSearchComponent
  ]
})
export class AppModule { }
