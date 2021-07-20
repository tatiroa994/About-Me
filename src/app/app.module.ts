import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProjectComponent } from './project/project.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    AllProjectsComponent,
    ContactMeComponent,
    ProjectComponent,
    NavigationBarComponent,
  ],
  imports: [BrowserModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule {}
