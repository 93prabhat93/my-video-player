import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http:HttpClient) {}

  getVideosFromServer() {
    let response = this.http.get('https://valuefy-assignment-x.herokuapp.com/api/getVideos');
    return response;

}
}
