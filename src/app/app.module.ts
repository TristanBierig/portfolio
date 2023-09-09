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
import { BubblesComponent } from './bubbles/bubbles.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectElementComponent } from './project/project-element/project-element.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ScrollToDirective } from './directives/scroll-to.directive';
import { SidenavService } from './sidenav.service';
import { HttpClientModule } from '@angular/common/http';
import { MailService } from './mail.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AtfComponent,
    SidenavComponent,
    PreambleComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    BubblesComponent,
    SkillSetComponent,
    ProjectListComponent,
    ProjectElementComponent,
    ContactComponent,
    ContactFormComponent,
    FooterComponent,
    ScrollToDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    NgIf,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    SidenavService,
    MailService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
