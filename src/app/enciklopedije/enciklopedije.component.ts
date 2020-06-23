import { Component, OnInit } from '@angular/core';
import {Knjiga} from '../shared/knjiga';
import {KnjigaService} from '../services/knjiga.service';

@Component({
  selector: 'app-enciklopedije',
  templateUrl: './enciklopedije.component.html',
  styleUrls: ['./enciklopedije.component.css']
})
export class EnciklopedijeComponent implements OnInit {

  knjige: Knjiga[];

  constructor(private knjigaservice: KnjigaService) { }

  ngOnInit(){
  	this.knjigaservice.getKnjige()
    .subscribe((knjige)=>this.knjige=knjige);
  }

}
 