import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../model/book";

const API_URL = 'http://localhost:3000/books/'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(API_URL);
  }

  findById(id:any):Observable<Book>{
    const idParam = Number(id);
    return this.httpClient.get<Book>(API_URL + idParam);
  }

  updateBook(id: any, book:Book):Observable<Book>{
    const idParam = Number(id);
    return this.httpClient.put<Book>(API_URL + idParam, book);
  }

}
