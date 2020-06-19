import { Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { KnjiznicaComponent } from '../knjiznica/knjiznica.component';
import { GlazbaComponent } from '../glazba/glazba.component';
import { OmeniComponent } from '../omeni/omeni.component';
import { UpisknjigeComponent } from '../upisknjige/upisknjige.component';
import { BookdetailComponent } from '../bookdetail/bookdetail.component'

export const routes: Routes=[
{path:'home', component: HomeComponent},
{path:'knjiznica', component: KnjiznicaComponent},
{path:'glazba', component: GlazbaComponent},
{ path: 'bookdetail/:id', component: BookdetailComponent },
{path:'omeni', component: OmeniComponent},
{path:'upisknjige', component: UpisknjigeComponent},
{path:'', redirectTo: '/home', pathMatch:'full'}
];