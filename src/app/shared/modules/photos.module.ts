import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

import { PhotosListComponent } from 'src/app/photos/photos-list.component';
import { PhotosDescriptionComponent } from '../../photos/photos-description.component';
import { FormsModule } from '@angular/forms';
import { PhotosService } from '../photos.service';

@NgModule({
  declarations: [
    PhotosListComponent,
    PhotosDescriptionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'photos', component: PhotosListComponent },
      { path: 'photos/:id', component: PhotosDescriptionComponent },
    ]),
    MaterialModule,
    FormsModule
  ],
  providers: [
    PhotosService
  ]
})
export class PhotosModule {}
