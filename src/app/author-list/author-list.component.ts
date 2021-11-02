import { Component, OnInit } from '@angular/core';
import {Author, authors} from '../model/Author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  authors = authors;
  constructor() { }

  ngOnInit() {
  }

  handleDelete(author : Author) {
    this.authors = this.authors.filter((item) => item.id !== author.id);
  }
}
