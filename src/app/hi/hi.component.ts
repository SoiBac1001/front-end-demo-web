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

  authors = [
    {
      id: 1,
      firstName: 'Flora',
      lastName: 'Twell',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
    },
    {
      id: 2,
      firstName: 'Priscella',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
    },
  ];

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
