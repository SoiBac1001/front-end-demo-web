import {Component} from '@angular/core';
import {MessageService} from '../service/message.service';

declare var SockJS;
declare var Stomp;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chat Room';
  input;
  currentProgress = 70;

  constructor(private messageService: MessageService) {
  }

  user = {
    name: 'nam',
    age: 25,
    info: 'Ha Noi'
  };

  sendMessage() {
    if (this.input) {
      this.messageService.sendMessage(this.input);
      this.input = '';
    }
  }
}
