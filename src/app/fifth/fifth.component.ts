import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {
  value:string
  result:string
  constructor() { }
  reverseStringWithoutFunc() {
        var result = "";
        var wordArray = this.splitStringwithSpace(this.value);
        console.log(this.splitStringwithSpace(this.value));
        for(let i =0; i < wordArray.length ; i++) {
          result+= this.reverseString(wordArray[i])+ " ";
        }
        this.result= result.trim();
    }
  //could also pass the delimeter in the function but the pattern was not getting converted to RegEx object type
  splitStringwithSpace(str)
  {
    return str.match(/([^ ]+)/g);
  }
 
  reverseString(s) {
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
      o += s[i];
    return o;
    }
  ngOnInit() {
  }

}
