import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Book} from "../../model/book";
import {BookService} from "../../service/book.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  books: Book;

  bookForm: FormGroup = this.fb.group({
    title: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl('')
  })

  constructor(private bookService: BookService, private activateRoute: ActivatedRoute, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(
      paraMap => {
        const id = paraMap.get('id');
        console.log(id);
        this.bookService.findById(id).subscribe(result => {
            this.books = result;
            console.log(result);
          }, error => {
            console.log(error);
          }
        )
      }
    )
    this.books = {
      title: '',
      author: '',
      description: ''
    }
  }


  updateBook() {
    const book = this.bookForm.value;
    console.log(book);
    this.bookService.updateBook(this.books.id, book).subscribe(result =>
    {
      alert("thành công");
    },
      error => {alert("không thành công")}
    )
  }

}
