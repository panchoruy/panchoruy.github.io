import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

const API_KEY = "35aaa78f22e30b2123c479fccac9a369";
const JSON_ARGS = "format=json&nojsoncallback=1";

@Injectable({providedIn: 'root'})
export class PhotoService {

  constructor(private http: HttpClient) {
  }

  // Returns a photo list with sizes
  getPhotoMetadataByTagsObservable(
    tags: string = "website",
    user_id: string = "panchoruy", 
    api_key: string = API_KEY) { 

    var base_url = "https://www.flickr.com/services/rest/?method=flickr.photos.search" 
    var request_url = `${base_url}&api_key=${api_key}&user_id=${user_id}&tags=${tags}&${JSON_ARGS}&extras=tags`

    var requestObservable = this.http.get(request_url);

    var photosMetadataSubscriber = (observer =>
      requestObservable.subscribe((data: any) => {
        var photosArray = data.photos.photo;
        var photoSizesObservables = photosArray.map(photoMetadata => 
          this.getPhotoSizesObservable(photoMetadata.id))
        // forkJoin allows to wait for all requests to be completed.
        forkJoin(photoSizesObservables).subscribe((data: any) => {
          var photoSizes = data.map(element => element.sizes.size);
          // forkJoin should return the results in order.
          for (var index = 0; index < photoSizes.length; index++) {
            photosArray[index].sizes = photoSizes[index];
          }
          observer.next(photosArray);
          observer.complete();
        });
      }));
    
    return new Observable(photosMetadataSubscriber);
  }

  private getPhotoSizesObservable(
    photo_id: string, 
    api_key: string = API_KEY) {

    var request_url = `https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${api_key}&photo_id=${photo_id}&${JSON_ARGS}`
    return this.http.get(request_url)
  }
}
