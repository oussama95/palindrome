import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Mot} from "../model/mot.model";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";


@Injectable({providedIn:"root"})
export class PalindromeService {
  constructor(private http:HttpClient) {
  }
  getAllWords():Observable<Mot[]>{
    let host= environment.host;
    return this.http.get<Mot[]>(host);
  }
  palindrome(str: string):boolean {
    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
  }
}
