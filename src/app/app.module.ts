import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.compoent';
import { IntroComponent } from './intro/intro.component';
import { PartnersComponent } from './partners/partners.component';
import { ServicesComponent } from './services/services.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { CareersComponent } from './careers/careers.component';
import { CoursesComponent } from './courses/courses.component';
import { ContanctComponent } from './contanct/contanct.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    PartnersComponent,
    ServicesComponent,
    TechnologiesComponent,
    CareersComponent,
    CoursesComponent,
    ContanctComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
