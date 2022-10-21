import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tour } from '../interface/tour';
let api_url= environment.api_url;
@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(
    private _HttpClient: HttpClient
  ) { }

  getAll():Observable<Tour[]>{
    return this._HttpClient.get<Tour[]>(api_url);
  }
  store(data:Tour):Observable<Tour>{
    return this._HttpClient.post<Tour>(api_url,data);
  }
  update(id:any,data:Tour):Observable<Tour>{
    return this._HttpClient.put<Tour>(api_url+'/'+id,data);
  }
  destroy(id:any): Observable<Tour>{
    return this._HttpClient.delete<Tour>(api_url+'/'+id);
  }
  find(id:any): Observable<Tour>{
    return this._HttpClient.get<Tour>(api_url+'/'+id);
  }
  show(id:any): Observable<Tour> {
    return this._HttpClient.get<Tour>(`${api_url}/${id}`);
  }
}
