import { Component, OnInit } from '@angular/core';
import {Knjiga} from '../shared/knjiga';
import {KNJIGE} from '../shared/knjige';

@Component({
  selector: 'app-knjiznica',
  templateUrl: './knjiznica.component.html',
  styleUrls: ['./knjiznica.component.css']
})
export class KnjiznicaComponent implements OnInit {

	knjige: Knjiga[]=KNJIGE;

  constructor() { }

  ngOnInit(): void {
  }

}
