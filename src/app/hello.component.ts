import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <h1>Hello {{info}}</h1>
    <h2>Hello World</h2>
    <p>{{user}}</p>
    <h3>Your name: {{user.name}}</h3> <!-- {{expression}} -->
    <p>Your name: {{user.age}}</p>
    <input type="text" [value]="user.name">
  `, // inline template
})
export class HelloComponent {
  @Input() info: string;
  private user = {
    name: 'SoiBac1001',
    age: 25,
  };
}
