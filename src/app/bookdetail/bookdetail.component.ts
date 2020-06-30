import { Component, OnInit, Inject } from '@angular/core';

import { Knjiga } from '../shared/knjiga';
import { KnjigaService } from '../services/knjiga.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css'],

  animations: [
    trigger('visibility', [
        state('shown', style({
            transform: 'scale(1.0)',
            opacity: 1
        })),
        state('hidden', style({
            transform: 'scale(0.5)',
            opacity: 0
        })),
        transition('* => *', animate('0.5s ease-in-out'))
    ])
  ]
})
export class BookdetailComponent implements OnInit {

  knjiga: Knjiga;
  knjige: Knjiga[];
  knjigaIds: string[];
  prev: string;
  next: string;
  errMess: string;

  visibility='shown';

  constructor(private knjigaservice: KnjigaService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('BaseURL') public BaseURL) { }

  ngOnInit() {
    this.knjigaservice.getKnjigaIds().subscribe(knjigaIds => this.knjigaIds = knjigaIds);
    
    this.route.params.pipe(switchMap((params: Params) => {this.visibility='hidden'; return this.knjigaservice.getKnjiga(params['id']);}))
    .subscribe(knjiga => { this.knjiga = knjiga; this.setPrevNext(knjiga.id); this.visibility='shown';}, errmess=>this.errMess=<any>errmess);
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
