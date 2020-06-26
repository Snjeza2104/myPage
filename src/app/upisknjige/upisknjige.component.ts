import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Knjiga, TipKnjige } from '../shared/knjiga';


@Component({
  selector: 'app-upisknjige',
  templateUrl: './upisknjige.component.html',
  styleUrls: ['./upisknjige.component.css']
})
export class UpisknjigeComponent implements OnInit {
	knjigaForm: FormGroup;
	knjiga: Knjiga;
  tipKnjige = TipKnjige;
  knjigacopy: Knjiga;

  formErrors={
  'autor':'',
  'imeknjige':'',
  'izdavac':'',
  'godinaizdanja':'',
  'slika':'',
  'tipKnjige':''
  }

  validationMessages={
    'autor': {'required': 'Potrebno je navesti autora.'},
    'imeknjige': {'required': 'Potrebno je navesti ime knjige.'},
    'izdavac':  {'required': 'Potrebno je navesti izdavača.'},
    'godinaizdanja': {'required': 'Potrebno je navesti godinu izdanja knjige.',
                      'pattern': 'Godina izdanja treba sadržavati samo brojeve.'},
    'slika':  {'required': 'Potrebno je navesti link na sliku knjige.'},
    'tipKnjige':  {'required': 'Potrebno je navesti tip knjige.'}
  }

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
  godinaizdanja:[0, [Validators.required, Validators.pattern]],
  slika:['', Validators.required],
  tipKnjige: ['ostalo',Validators.required]
  });

  this.knjigaForm.valueChanges.subscribe (data=> this.onValueChanged(data));

  this.onValueChanged(); //(re)set validation messages now
  }
  onSubmit(){
  this.knjiga=this.knjigaForm.value;
  console.log(this.knjiga);
/*  this.knjigacopy.push(this.knjiga);
  this.knjigaService.putKnjiga(this.knjigacopy)
  .subscribe(knjiga=>{
    this.knjiga=knjiga; this.knjigacopy=knjiga;
  }, errmess=>{this.knjiga=null; this.knjigacopy=null; this.errMsg=<any>errmess;});
  */
  this.knjigaForm.reset({
    id:'',
    autor:'',
    imeknjige:'',
    izdavac:'',
    godinaizdanja:2020,
    slika:'',
    tipKnjige: 'ostalo'
  });
  this.feedbackFormDirective.resetForm();
  }

onValueChanged(data?: any){
    if(!this.knjigaForm) {return;}
    const form=this.knjigaForm;
    for(const field in this.formErrors){
      if(this.formErrors.hasOwnProperty(field)){
        //clear previous error message (if any)
        this.formErrors[field]='';
        const control=form.get(field);
        if(control && control.dirty && !control.valid){
          const messages=this.validationMessages[field];
          for(const key in control.errors){
            if(control.errors.hasOwnProperty(key)){
              this.formErrors[field]+=messages[key]+' ';
            }
          }
        }
      }
    }
  }
 }
