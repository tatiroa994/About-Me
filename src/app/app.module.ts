import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './app/home/home.component';
import { AboutMeComponent } from './app/about-me/about-me.component';
import { AllProyectsComponent } from './app/all-proyects/all-proyects.component';
import { ContacMeComponent } from './app/contac-me/contac-me.component';
import { ProyectComponent } from './app/proyect/proyect.component';
import { NavegationBarComponent } from './app/navegation-bar/navegation-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    AllProyectsComponent,
    ContacMeComponent,
    ProyectComponent,
    NavegationBarComponent,
  ],
  imports: [BrowserModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
