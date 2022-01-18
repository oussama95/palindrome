import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PalindromeService} from "../Service/palindrome.service";
import {map, Observable} from "rxjs";
import {Mot} from "../model/mot.model";

@Component({
  selector: 'app-parse-route',
  templateUrl: './parse-route.component.html',
  styleUrls: ['./parse-route.component.css']
})
export class ParseRouteComponent implements OnInit {
  verifPalin:boolean=false;
  mots?:Observable<Mot[]>;
  mot:string;
  constructor(private palindromeService:PalindromeService,private activatedRoute:ActivatedRoute) {
    this.mot = this.activatedRoute.snapshot.params['mot'];
  }

  ngOnInit(): void {
    this.mots = this.palindromeService.getAllWords();
    console.log(this.mots);
    if(this.mot){
      console.log(this.mot);
      this.verifPalin=this.palindromeService.palindrome(this.mot);
      console.log(this.verifPalin);
    }
  }

}
