import { Component, OnInit } from '@angular/core';
import { PhotoService } from './../photo.service';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit {

  constructor(private photoService: PhotoService) { }

  innerWidth: any;

  ngOnInit() {
    this.photoService.getPhotoListByTagsObservable().subscribe((data: any) => {
      this.calculateAndDisplayRows(data.photos.photo);
    });
    this.innerWidth = window.innerWidth;
  }

  private calculateAndDisplayRows(photoList: any) {
    var photoObservables = photoList.map(photoInfo => 
      this.photoService.getPhotoSizesObservable(photoInfo.id))
    
    forkJoin(photoObservables).subscribe((data: any) => {
      var photoDimensions = data.map(element => element.sizes.size);
      var rows = [];
      var row = {width: 0, photoIndexes: []};
      for (var index = 0; index < photoDimensions.length; index++) {
        var original = photoDimensions[index].find(size => size.label == "Original");
        var ratio = original.width / original.height;
        var scaledBaseWidth = ratio * 400;
        row.width += scaledBaseWidth;
        row.photoIndexes.push({index}); 
        if (row.width >= this.innerWidth) {
          rows.push(this.normalizeRowDimensions(row));
          row = {width: 0, photoIndexes: []};
        }
      }
    });
  }

  private normalizeRowDimensions(row){
    return row;
  }

}
