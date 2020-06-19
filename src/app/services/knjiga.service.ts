import { Injectable } from '@angular/core';
import{ Knjiga } from '../shared/knjiga';
import { KNJIGE } from '../shared/knjige';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KnjigaService {

  constructor() { }

getKnjige(): Observable<Knjiga[]> {
    return of(KNJIGE).pipe(delay(2000));
  }

  getKnjigaIds(): Observable<string[] | any> {
    return of(KNJIGE.map(knjiga => knjiga.id ));
  }

  getKnjiga(id: string): Observable<Knjiga> {
    return of(KNJIGE.filter((knjiga) => (knjiga.id === id))[0]).pipe(delay(2000));
  }

}
