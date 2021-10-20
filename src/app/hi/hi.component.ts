import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.scss']
})
export class HiComponent implements OnInit, OnDestroy {
  constructor() { }

  @Input() info: string;
  user = {
    name: 'Kaka',
    age: 18,
  };

  ngOnInit() {
    console.log('Hi init');
  }

  ngOnDestroy() {
    console.log('Hi destroy');
  }

  alert(event) {
    console.log('clicked', event);
    alert('You are win !');
  }
}
