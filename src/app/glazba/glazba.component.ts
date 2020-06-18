import { Component, OnInit } from '@angular/core';
import {Pjesma} from '../shared/pjesma';
import {PJESME} from '../shared/pjesme'

@Component({
  selector: 'app-glazba',
  templateUrl: './glazba.component.html',
  styleUrls: ['./glazba.component.css']
})
export class GlazbaComponent implements OnInit {

	pjesme: Pjesma[]=PJESME;

  constructor() { }

  ngOnInit(): void {
  }

}
