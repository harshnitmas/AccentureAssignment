import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
  value:string
  result:string
  constructor() { }
  reverseString() {
        var result = "";
        var wordArray = this.value.split(" ");
        for(let i =0; i < wordArray.length ; i++) {
          result+= (wordArray[i].split("").reverse().join("")) +" "
        }
        this.result= result.trim();
    }
  ngOnInit() {
  }

}
