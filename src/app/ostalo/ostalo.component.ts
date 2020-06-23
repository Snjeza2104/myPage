import { Component, OnInit } from '@angular/core';
import {Knjiga} from '../shared/knjiga';
import {KnjigaService} from '../services/knjiga.service';

@Component({
  selector: 'app-ostalo',
  templateUrl: './ostalo.component.html',
  styleUrls: ['./ostalo.component.css']
})
export class OstaloComponent implements OnInit {

	knjige: Knjiga[];

  constructor(private knjigaservice: KnjigaService) { }

  ngOnInit(){
  	this.knjigaservice.getKnjige()
    .subscribe((knjige)=>this.knjige=knjige);
  }

}
