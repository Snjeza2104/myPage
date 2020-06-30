import { Injectable } from '@angular/core';
import{ Knjiga } from '../shared/knjiga';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class KnjigaService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }

getKnjige(): Observable<Knjiga[]> {
    return this.http.get<Knjiga[]>(baseURL + 'knjige')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getKnjigaIds(): Observable<string[] | any> {
    return this.getKnjige().pipe(map(knjige=>knjige.map(knjiga=>knjiga.id)))
    .pipe(catchError(error=>error));
  }

  getKnjiga(id: string): Observable<Knjiga> {
    return this.http.get<Knjiga>(baseURL + 'knjige/' +id)
    .pipe(catchError(this.processHTTPMsgService.handleError));;
  }

  postKnjiga(knjiga:Knjiga): Observable<Knjiga>{
    const httpOptions={
      headers: new HttpHeaders({
      'Content-Type':'application/json'
      })
    };
    console.log("Do ovdje radi");
    console.log(knjiga);
    return this.http.post<Knjiga>(baseURL+'knjige/', knjiga, httpOptions)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

}
