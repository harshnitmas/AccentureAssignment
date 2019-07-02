import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.css']
})
export class SixthComponent implements OnInit {
  value = ["AA", "BB", "CC", "AA", "B"];
  result:any
  constructor() { }
   getUnique() {
        var result = [];
        for(var item of this.value){
                  if(result.indexOf(item) === -1){
                    result.push(item);
                  }
              }
              this.result = result;
    }
  ngOnInit() {
  }

}
