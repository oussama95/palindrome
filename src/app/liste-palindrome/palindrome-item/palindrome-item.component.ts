import {Component, Input, OnInit} from '@angular/core';
import {Mot} from "../../model/mot.model";
import {PalindromeService} from "../../Service/palindrome.service";

@Component({
  selector: 'app-palindrome-item',
  templateUrl: './palindrome-item.component.html',
  styleUrls: ['./palindrome-item.component.css']
})
export class PalindromeItemComponent implements OnInit {
  @Input() item?:Mot;
  isPalindrome:boolean | null=null;
  constructor(private palindromeService:PalindromeService) { }

  ngOnInit(): void {
    if (this.item){
      this.isPalindrome=this.palindromeService.palindrome(this.item.label);
    }
  }

}
