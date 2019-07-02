import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  result:any
  constructor() { }
  displayKeys()
  {
    function getKeys(object) {
      function iter(o, p) {
          if (Array.isArray(o)) { return; }
          if (o && typeof o === 'object') {
              var keys = Object.keys(o);
              if (keys.length) {
                  keys.forEach(function (k) { iter(o[k], p.concat(k)); });
              }
              return;
          }
          result.push(p);
      }
      var result = [];
      iter(object, []);
      return result;
  }

  var object =  {  a: 5, b: { c: { d: 10 } }};
  var a=getKeys(object);
  this.result=a;
  }
  ngOnInit() {
  }

}
