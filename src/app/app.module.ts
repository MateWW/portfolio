import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { ScrollmasterControllerService } from './scrollmaster-controller.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavigationComponent } from './header/navigation.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ChartComponent } from './my-skills/chart.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactFormComponent } from './contact/contact-form.component';


 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    NavigationComponent,
    MySkillsComponent,
    ChartComponent,
    EducationComponent,
    ContactComponent,
    PortfolioComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // Ng2PageScrollModule.forRoot()
  ],
  providers: [
    ScrollmasterControllerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
