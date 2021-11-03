import { Component, OnInit } from '@angular/core';
import {Author, authors} from '../model/Author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  authors = authors;
  currentAuthor: Author = authors[0];
  constructor() { }

  ngOnInit() {
  }

  handleDelete(author : Author) {
    this.authors = this.authors.filter((item) => item.id !== author.id);
    if(this.currentAuthor.id === author.id) {
      this.currentAuthor = this.authors[0];
    }
  }

  handleSelect(author : Author) {
    this.currentAuthor = author;
  }
}
