import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HebrewDate } from '../models/hebrew-date';

@Injectable({
  providedIn: 'root'
})
export class HebrewDateService {

  constructor(private httpClient: HttpClient ) { }


  public getHebrewDate(gy:number, gm:number, gd:number){
    return this.httpClient.get<HebrewDate>("https://www.hebcal.com/converter?cfg=json&gy="
    +gy + "&gm=" +gm +"&gd="+ gd +"&g2h=1");
  }

}
