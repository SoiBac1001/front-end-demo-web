import {Component} from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <h2>Hello World</h2>
    <p>{{user}}</p>
    <h3>Your name: {{user.name}}</h3> <!-- {{expression}} -->
    <p>Your name: {{user.age}}</p>
    <input type="text" [value]="user.name">
  `, // inline template
})
export class HelloComponent {
  user = {
    name: 'SoiBac1001',
    age: 25,
  };
}
