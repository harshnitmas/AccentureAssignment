import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  value:string = "Hello User"
  result:string =""
  constructor() { }
  countOccurence()
  {
    var counts = {};
    var ch, count;
    for(let i=0;i<this.value.length; i++)
    {
      ch = this.value.charAt(i);
      count = counts[ch];
      counts[ch] = count ? count + 1 : 1;
    }
    for (ch in counts) {
      console.log(ch + " count: " + counts[ch]);
      this.result=this.result + ch + " count: " + counts[ch] +"\n";
    }
  }
  
  ngOnInit() {
  }

}
