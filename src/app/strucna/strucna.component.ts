import { Component, OnInit } from '@angular/core';
import {Knjiga} from '../shared/knjiga';
import {KnjigaService} from '../services/knjiga.service';

@Component({
  selector: 'app-strucna',
  templateUrl: './strucna.component.html',
  styleUrls: ['./strucna.component.css']
})
export class StrucnaComponent implements OnInit {

  knjige: Knjiga[];

  constructor(private knjigaservice: KnjigaService) { }

  ngOnInit(){
  	this.knjigaservice.getKnjige()
    .subscribe((knjige)=>this.knjige=knjige);
  }

}
