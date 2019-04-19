import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() currentUrl: any;
  // currentUrl: any;
  
  constructor(private sanitizer:DomSanitizer){ }


  ngOnInit() {
    this.currentUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/6ZfuNTqbHE8');
  }


}
