import { Component, OnInit } from '@angular/core';
import { PhotoService } from './../photo.service';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit {

  photoListObservable: object;

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.searchPhoto().subscribe((data) => {
      this.photoListObservable = data.photos.photo;
      console.log(this.photoListObservable);
    });
  }
}
