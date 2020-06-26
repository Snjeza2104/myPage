import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';

import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { KnjiznicaComponent } from './knjiznica/knjiznica.component';
import { GlazbaComponent } from './glazba/glazba.component';
import { OmeniComponent } from './omeni/omeni.component';
import { UpisknjigeComponent } from './upisknjige/upisknjige.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { DuhovnaComponent } from './duhovna/duhovna.component';
import { OstaloComponent } from './ostalo/ostalo.component';
import { StrucnaComponent } from './strucna/strucna.component';
import { EnciklopedijeComponent } from './enciklopedije/enciklopedije.component';
import { HighlightDirective } from './directives/highlight.directive';

import { baseURL } from './shared/baseurl';

import { ProcessHTTPMsgService } from './services/process-httpmsg.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    KnjiznicaComponent,
    GlazbaComponent,
    OmeniComponent,
    UpisknjigeComponent,
    BookdetailComponent,
    DuhovnaComponent,
    OstaloComponent,
    StrucnaComponent,
    EnciklopedijeComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    HttpClientModule 
  ],
  providers: [{provide: 'BaseURL', useValue:baseURL},
                ProcessHTTPMsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
