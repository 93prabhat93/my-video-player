import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';  // replaces previous Http service
import { FormsModule } from '@angular/forms';
import { ApiRequestService } from './api-request.service';   // our custom service, see below

import { RequestInterceptor } from './request.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './list/player//player.component';
import { ListComponent } from './list/list.component';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OwlModule
  ],
  providers: [
    ApiRequestService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
