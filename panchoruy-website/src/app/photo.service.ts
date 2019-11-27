import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_KEY = "35aaa78f22e30b2123c479fccac9a369";
const JSON_ARGS = "format=json&nojsoncallback=1";

@Injectable({providedIn: 'root'})
export class PhotoService {

  constructor(private http: HttpClient) {
  }

  getPhotoSizesObservable(
    photo_id: string, 
    api_key: string = API_KEY) {

    var request_url = `https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${api_key}&photo_id=${photo_id}&${JSON_ARGS}`
    return this.http.get(request_url)
  }

  getPhotoListByTagsObservable(
    tags: string = "website",
    user_id: string = "panchoruy", 
    api_key: string = API_KEY) { 

    var base_url = "https://www.flickr.com/services/rest/?method=flickr.photos.search" 
    var request_url = `${base_url}&api_key=${api_key}&user_id=${user_id}&tags=${tags}&${JSON_ARGS}`
    return this.http.get(request_url);
  }
}
