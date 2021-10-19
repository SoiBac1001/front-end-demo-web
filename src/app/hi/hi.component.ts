import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.scss']
})
export class HiComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  user = {
    name: 'Kaka',
    age: 25,
  };

  alert() {
    alert('You are win !');
  }
}
