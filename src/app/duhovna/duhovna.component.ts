import { Component, OnInit } from '@angular/core';
import {Knjiga} from '../shared/knjiga';
import {KnjigaService} from '../services/knjiga.service';

@Component({
  selector: 'app-duhovna',
  templateUrl: './duhovna.component.html',
  styleUrls: ['./duhovna.component.css']
})
export class DuhovnaComponent implements OnInit {

	knjige: Knjiga[];

  constructor(private knjigaservice: KnjigaService) { }

  ngOnInit(){
  	this.knjigaservice.getKnjige()
    .subscribe((knjige)=>this.knjige=knjige);
  }

}
