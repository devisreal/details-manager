import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPhoto } from '../shared/interface/photos';
import { PhotosService } from '../shared/photos.service';

@Component({
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css'],
})
export class PhotosListComponent implements OnInit {
  photos: IPhoto[] = [];
  errorMessage: string = '';
  sub!: Subscription;
  cameraImage: string = 'assets/camera.jpg';
  

  constructor(private photosService: PhotosService) {}

  ngOnInit(): void {
    this.sub = this.photosService.getPhotos().subscribe({
      next: (photos) => {
        this.photos = photos;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
