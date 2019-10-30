import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  api_key: string;

  constructor(private http: HttpClient) {
    this.api_key = "35aaa78f22e30b2123c479fccac9a369";

  }

  getPhoto(id: string) { 
    var base_url = "https://www.flickr.com/services/rest/?method=flickr.photos.search";

  }

  searchPhoto() {
    var url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=35aaa78f22e30b2123c479fccac9a369&user_id=panchoruy&tags=website&format=json&nojsoncallback=1";
    return this.http.get(url);
  }
}
