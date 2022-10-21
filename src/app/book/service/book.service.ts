import { Injectable } from '@angular/core';
import { Book } from '../interface/book';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


let apiUrl= environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(
    private _HttpClient: HttpClient
  ) { }

  getAll():Observable<Book[]>{
    return this._HttpClient.get<Book[]>(apiUrl);
  }
  store(data:Book):Observable<Book>{
    return this._HttpClient.post<Book>(apiUrl,data);
  }
  update(id:any, data:Book): Observable<Book>{
    return this._HttpClient.put<Book>(`${apiUrl}/${id}`,data);
  }
  destroy(id:any): Observable<Book>{
    return this._HttpClient.delete<Book>(apiUrl+'/'+id);
  }
  find(id:any): Observable<Book>{
    return this._HttpClient.get<Book>(apiUrl+'/'+id);
  }
  show(id:any): Observable<Book> {
    return this._HttpClient.get<Book>(`${apiUrl}/${id}`);
  }
}
