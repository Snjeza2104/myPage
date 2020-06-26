import { Component, OnInit, Inject } from '@angular/core';

import { Knjiga } from '../shared/knjiga';
import { KnjigaService } from '../services/knjiga.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {

  knjiga: Knjiga;
  knjige: Knjiga[];
  knjigaIds: string[];
  prev: string;
  next: string;
  errMess: string;

  constructor(private knjigaservice: KnjigaService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('BaseURL') public BaseURL) { }

  ngOnInit() {
    this.knjigaservice.getKnjigaIds().subscribe(knjigaIds => this.knjigaIds = knjigaIds);
    this.route.params.pipe(switchMap((params: Params) => this.knjigaservice.getKnjiga(params['id'])))
    .subscribe(knjiga => { this.knjiga = knjiga; this.setPrevNext(knjiga.id); }, errmess=>this.errMess=<any>errmess);
  }

  setPrevNext(knjigaId: string) {
    const index = this.knjigaIds.indexOf(knjigaId);
    this.prev = this.knjigaIds[(this.knjigaIds.length + index - 1) % this.knjigaIds.length];
    this.next = this.knjigaIds[(this.knjigaIds.length + index + 1) % this.knjigaIds.length];
  }

  goBack(): void {
    this.location.back();
  }

}
