import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="http://127.0.0.1:8000/";
  constructor(private http:HttpClient) { }

  getBooksList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'books/');
  }
  getBookDetails(id:any) {
    return this.http.get<any>(this.APIUrl+'books/'+id+'/') ;
  }
  sortBooksList(sort_by:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'books/sort/'+sort_by+'/');
  }
}
