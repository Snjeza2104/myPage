import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Knjiga } from '../shared/knjiga';

@Component({
  selector: 'app-upisknjige',
  templateUrl: './upisknjige.component.html',
  styleUrls: ['./upisknjige.component.css']
})
export class UpisknjigeComponent implements OnInit {
	knjigaForm: FormGroup;
	knjiga: Knjiga;
  constructor(private fb: FormBuilder) {
  this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
  this.knjigaForm=this.fb.group({
  id:0,
  autor:'',
  imeknjige:'',
  izdavac:'',
  godinaizdanja:0,
  slika:''
  });
  }

  onSubmit(){
  this.knjiga=this.knjigaForm.value;
  console.log(this.knjiga);
  this.knjigaForm.reset();
  }

}
