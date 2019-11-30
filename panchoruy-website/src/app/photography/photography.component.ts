import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PhotoService } from './../photo.service';
import { forkJoin } from 'rxjs';

const _BASE_ROW_HEIGHT = 400

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit {
  @ViewChild('photographyContainer', {static: false}) 
  photographyContainer: ElementRef;
  innerWidth: number;

  constructor(private photoService: PhotoService) { }


  ngOnInit() {
    this.photoService.getPhotoListByTagsObservable().subscribe((data: any) => {
      this.calculateAndDisplayRows(data.photos.photo);
    });
    this.innerWidth = window.innerWidth - 14;
  }

  private calculateAndDisplayRows(photoList: any) {
    var photoObservables = photoList.map(photoInfo => 
      this.photoService.getPhotoSizesObservable(photoInfo.id))
    
    forkJoin(photoObservables).subscribe((data: any) => {
      var photoDimensions = data.map(element => element.sizes.size);
      var rows = this.calculateSizes(photoDimensions);
      var photoElements = this.createPlaceholders(rows);
      this.insertImages(photoElements, photoDimensions);
    });
  }

  // Given the photoDimensions that the flickr API delivers, calculate exact dimensions for each row.
  private calculateSizes(photoDimensions) {
      var rows = [];
      var rowBuffer = {totalWidth: 0, photosInfo: []};
      for (var index = 0; index < photoDimensions.length; index++) {
        var originalSize = photoDimensions[index].find(size => size.label == "Original");
        var ratio = originalSize.width / originalSize.height;
        var scaledBaseWidth = ratio * _BASE_ROW_HEIGHT;
        rowBuffer.totalWidth += scaledBaseWidth;
        rowBuffer.photosInfo.push({"index": index, "width": scaledBaseWidth}); 
        if (rowBuffer.totalWidth >= this.innerWidth) {
          rows.push(this.normalizeRowDimensions(rowBuffer));
          rowBuffer = {totalWidth: 0, photosInfo: []};
        }
      }
    return rows;
  }

  // Given the sizes of each row and element, create DOM divs with the appropriate sizes.
  private createPlaceholders(rows) {
    var container = this.photographyContainer.nativeElement;
    var photoElements = []
    for (var row of rows) {
      var rowElement = document.createElement("div");
      rowElement.style.display = "flex";
      for (var photoInfo of row.photosInfo){
        var photoElement = document.createElement("div");
        photoElement.style.backgroundColor = "#333";
        photoElement.style.height = row.height.toString() + "px";
        photoElement.style.width = photoInfo.width.toString() + "px";
        photoElements.push({width: photoInfo.width, height: row.height, ref: photoElement});
        rowElement.appendChild(photoElement);
      }
      container.appendChild(rowElement);
    }
    return photoElements;
  }

  // Find the smallest size that's larger than the element, and create an img with the appropriate src.
  private insertImages(photoElements, photoDimensions) {
    for (var index = 0; index < photoElements.length; index++) {
      var minSize = photoDimensions[index].find(size => size.width >= photoElements[index].width && size.height >= photoElements[index].height);
      console.log(minSize.source);
      var photo = document.createElement("img");
      photo.setAttribute("src", minSize.source);
      photo.style.maxHeight = "100%";
      photoElements[index].ref.appendChild(photo);
    }
  }

  private normalizeRowDimensions(row) {
    var scaleRatio = row.totalWidth / this.innerWidth;
    row.totalWidth = this.innerWidth;
    row.height = _BASE_ROW_HEIGHT / scaleRatio;
    return row;
  }

}
