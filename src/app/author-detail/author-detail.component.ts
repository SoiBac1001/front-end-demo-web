import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Author} from '../model/Author';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss']
})
export class AuthorDetailComponent implements OnInit {
  @Input() author : Author;
  @Output() deleteAuthor = new EventEmitter<Author>();

  constructor() { }

  ngOnInit() {
  }

  handleDelete(){
    this.deleteAuthor.emit(this.author);
  }
}
