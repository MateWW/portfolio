import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ScrollmasterControllerService } from './scrollmaster-controller.service';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavigationComponent } from './header/navigation.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ChartComponent } from './my-skills/chart.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
 
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
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ScrollmasterControllerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
