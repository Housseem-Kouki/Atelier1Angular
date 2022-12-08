import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculServiceService {
    nbrCritica : Number = 0;
    nbrValue : Number = 0;
  constructor() { }

  getNumberOf(list:any[], critiria:string, value:any){
    
    for(var i in list)
{
    if(i==critiria){}else if(i==value){}
}
  }
}
