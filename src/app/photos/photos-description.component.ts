import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhoto } from '../shared/interface/photos';
import { PhotosService } from '../shared/photos.service';

@Component({
  templateUrl: './photos-description.component.html',
  styleUrls: ['./photos-description.component.css'],
})
export class PhotosDescriptionComponent implements OnInit {
  
  errorMessage = '';
  photo: IPhoto | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private photoService: PhotosService
  ) {}

  previewImageWidth: number = 414;
  previewImageHeight: number = 276;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.getPhoto(id);
    }
    

    


  }

  getPhoto(id: string): void{
    this.photoService.getPhoto(id).subscribe({      
      next: (photo) => (this.photo = photo),
      error: (err) => (this.errorMessage = err),
    });
  }

  onBack(): void {
    this.router.navigate(['/photos']);
  }
}
