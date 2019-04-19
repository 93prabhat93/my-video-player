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
    this.urlToplay = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    console.log(url) ;
   }
   carouselOptions = {
    items: 4, dots: false, nav: true,loop: false, margin:15,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      480: {
        items: 2,
        nav: true
      },
      600: {
        items: 3,
        nav: true
      },
      992: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  }
  getVideos() {
    this.apiRequestService.getVideosFromServer().subscribe(
       data => { 
         this.videos = data; 
        console.log(this.videos);
       },
       error => {
         alert('Error!'); 
       },
   );
}

}
