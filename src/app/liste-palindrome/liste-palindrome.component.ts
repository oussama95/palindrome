import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Mot} from "../model/mot.model";
import {PalindromeService} from "../Service/palindrome.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-liste-palindrome',
  templateUrl: './liste-palindrome.component.html',
  styleUrls: ['./liste-palindrome.component.css']
})
export class ListePalindromeComponent implements OnInit {

  mots?:Observable<Mot[]>;
  constructor(private palindromeService:PalindromeService) {
  }

  ngOnInit(): void {
    this.mots = this.palindromeService.getAllWords();
    console.log(this.mots);
  }

}
