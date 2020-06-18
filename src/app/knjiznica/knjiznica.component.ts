import { Component, OnInit } from '@angular/core';
import {Knjiga} from '../shared/knjiga';
import {KnjigaService} from '../services/knjiga.service';

@Component({
  selector: 'app-knjiznica',
  templateUrl: './knjiznica.component.html',
  styleUrls: ['./knjiznica.component.css']
})
export class KnjiznicaComponent implements OnInit {

	knjige: Knjiga[];

  constructor(private knjigaService: KnjigaService) { }

  ngOnInit() {
    this.knjigaService.getKnjige()
    .then((knjige)=>this.knjige=knjige);
  }

  

}
