import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { PhotoService } from './../photo.service';

const _BASE_ROW_HEIGHT = 400;
const _PHOTO_SPACING = 5;

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit {
  @ViewChild('photographyContainer')
  private photographyContainer: ElementRef;
  // Dictionary of photo metadata indexed by id
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    var containerWidth = this.photographyContainer.nativeElement.clientWidth;
    var rows = this.calculateRowDimensions(containerWidth);
    this.resizeAndPositionElements(rows);
  }

  // Dictionary of photoMetadata indexed by id.
  private photosMetadata: any;
  // Array of photoMetadata (in order of display).
  private photosOrder: any;
  // Array off all photoElements
  photoElements: any;

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getPhotoMetadataByTagsObservable().subscribe((photosArray: any) => {
      // Store metadata indexed by id in memory, so that we can find sources faster
      this.photosOrder = shuffleInPlace(photosArray.map(element => element.id));
      this.photosMetadata = indexedById(photosArray);
      // Calculate the client width to display the appropriate row size
      var containerWidth = this.photographyContainer.nativeElement.clientWidth;
      var rows = this.calculateRowDimensions(containerWidth);
      this.createSkeletonElements();
      this.resizeAndPositionElements(rows);
    });
    this.photoElements = [];
  }

  // Returns an array of rows, where each row has height width and 
  private calculateRowDimensions(containerWidth) {
    var rows = [];
    var rowBuffer = { photosInfo: [], width: 0, height: 0 };
    for (var photoId of this.photosOrder) {
      var originalSize = this.photosMetadata[photoId].sizes.find(size => size.label == "Original");
      var ratio = originalSize.width / originalSize.height;
      var scaledBaseWidth = ratio * _BASE_ROW_HEIGHT;
      rowBuffer.width += scaledBaseWidth;
      rowBuffer.photosInfo.push({ "id": this.photosMetadata[photoId].id, "width": scaledBaseWidth });
      // Row is ready, rescale and ship
      if (rowBuffer.width >= containerWidth) {
        var spacesWidth = (rowBuffer.photosInfo.length - 1) * _PHOTO_SPACING;
        var scaleRatio = rowBuffer.width / (containerWidth - spacesWidth);
        rowBuffer.width = containerWidth;
        rowBuffer.height = _BASE_ROW_HEIGHT / scaleRatio;
        for (var photoInfo of rowBuffer.photosInfo) {
          photoInfo.width /= scaleRatio;
        }
        rows.push(rowBuffer);
        rowBuffer = { photosInfo: [], width: 0, height: 0 };
      }
    }
    // Last row not complete
    if (rowBuffer.width > 0) {
      rowBuffer.height = _BASE_ROW_HEIGHT;
      rows.push(rowBuffer);
    }
    return rows;
  }

  private createSkeletonElements() {
    for (var photoId of this.photosOrder) {
      var photoElement = {
        sizes: this.photosMetadata[photoId].sizes
      };
      this.photoElements.push(photoElement);
    }
  }

  private resizeAndPositionElements(rows) {
    var currentTop = 0;
    var index = 0;
    for (var row of rows) {
      var currentLeft = 0;
      for (var photoInfo of row.photosInfo) {
        this.photoElements[index].height = `${row.height}px`;
        this.photoElements[index].width = `${photoInfo.width}px`;
        this.photoElements[index].top = `${currentTop}px`;
        this.photoElements[index].left = `${currentLeft}px`;
        index++;
        currentLeft += photoInfo.width;
        currentLeft += _PHOTO_SPACING;
      }
      currentTop += row.height;
      currentTop += _PHOTO_SPACING;
    }
  }
}

function shuffleInPlace(array) {
  if (array.length <= 1) return array;
  for (let i = 0; i < array.length; i++) {
    var randomChoiceIndex = Math.floor(Math.random() * array.length);
    [array[i], array[randomChoiceIndex]] = [array[randomChoiceIndex], array[i]];
  }
  return array;
}

function indexedById(photosArray) {
  function f(object, element) {
    object[element.id] = element;
    return object;
  }
  return photosArray.reduce(f, {});
}