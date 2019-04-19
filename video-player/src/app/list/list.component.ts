import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../api-request.service';
import { DomSanitizer } from '@angular/platform-browser';

// import { PlayerComponent } from './player/player.component'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

constructor(public apiRequestService: ApiRequestService,private sanitizer:DomSanitizer) {}


videos:any;
urlToplay: any;


  ngOnInit() {
    this.getVideos();
    
  }
  myCurrentUrl(url:any){
    alert(url)
    this.urlToplay = this.sanitizer.bypassSecurityTrustResourceUrl(url); 
   }
  getVideos() {
    this.apiRequestService.getVideosFromServer().subscribe(
       data => { 
         this.videos = data; 
        console.log(this.videos);
       },
       err => {
         alert('Error!'); 
         
         // We can redirect it to error page.
       },
   );
}

}
