import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AtfComponent } from './atf/atf.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PreambleComponent } from './preamble/preamble.component';
import { ButtonPrimaryComponent } from './button-primary/button-primary.component';
import { ButtonSecondaryComponent } from './button-secondary/button-secondary.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AtfComponent,
    SidenavComponent,
    PreambleComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    NgIf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
