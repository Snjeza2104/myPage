import { Injectable } from '@angular/core';
import{ Knjiga } from '../shared/knjiga';
import { KNJIGE } from '../shared/knjige';

@Injectable({
  providedIn: 'root'
})
export class KnjigaService {

  constructor() { }

getKnjige(): Promise<Knjiga[]> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(KNJIGE), 2000);
    });
  }

}
