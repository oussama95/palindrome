import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParseRouteComponent } from './parse-route/parse-route.component';
import {HttpClientModule} from "@angular/common/http";
import { ListePalindromeComponent } from './liste-palindrome/liste-palindrome.component';
import { PalindromeItemComponent } from './liste-palindrome/palindrome-item/palindrome-item.component';
import {PalindromeService} from "./Service/palindrome.service";

@NgModule({
  declarations: [
    AppComponent,
    ParseRouteComponent,
    ListePalindromeComponent,
    PalindromeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
