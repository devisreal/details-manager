import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosDescriptionComponent } from './photos-description.component';

describe('PhotosDescriptionComponent', () => {
  let component: PhotosDescriptionComponent;
  let fixture: ComponentFixture<PhotosDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
