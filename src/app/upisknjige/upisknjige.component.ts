import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('fform') feedbackFormDirective;

  constructor(private fb: FormBuilder) {
  this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
  this.knjigaForm=this.fb.group({
  id:[0,Validators.required],
  autor:['', Validators.required],
  imeknjige:['', Validators.required],
  izdavac:['', Validators.required],
  godinaizdanja:[0, Validators.required],
  slika:['', Validators.required]
  });
  }

  onSubmit(){
  this.knjiga=this.knjigaForm.value;
  console.log(this.knjiga);
  this.knjigaForm.reset({
    id:0,
    autor:'',
    imeknjige:'',
    izdavac:'',
    godinaizdanja:0,
    slika:''
  });
  this.feedbackFormDirective.resetForm();
  }

}
