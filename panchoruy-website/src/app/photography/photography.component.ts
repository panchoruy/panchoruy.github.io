import { Component, OnInit } from '@angular/core';
import { PhotoService } from './../photo.service';
import { forkJoin } from 'rxjs';

const _BASE_ROW_HEIGHT = 400

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
        var originalSize = photoDimensions[index].find(size => size.label == "Original");
        var ratio = originalSize.width / originalSize.height;
        var scaledBaseWidth = ratio * _BASE_ROW_HEIGHT;
        row.width += scaledBaseWidth;
        row.photoIndexes.push({index}); 
        if (row.width >= this.innerWidth) {
          rows.push(this.normalizeRowDimensions(row));
          row = {width: 0, photoIndexes: []};
        }
      }
      console.log(rows);
    });
  }

  private normalizeRowDimensions(row){
    return row;
  }

}
