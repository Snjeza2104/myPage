import { Component, OnInit, Inject } from '@angular/core';
import {Knjiga} from '../shared/knjiga';
import {KnjigaService} from '../services/knjiga.service';

@Component({
  selector: 'app-knjiznica',
  templateUrl: './knjiznica.component.html',
  styleUrls: ['./knjiznica.component.css']
})
export class KnjiznicaComponent implements OnInit {

	knjige: Knjiga[];
  errMess: string;

  constructor(private knjigaService: KnjigaService,
  				@Inject('BaseURL') public BaseURL) { }

  ngOnInit() {
    this.knjigaService.getKnjige()
    .subscribe((knjige)=>this.knjige=knjige,
    errmess=>this.errMess=<any>errmess);
  }

  

}
