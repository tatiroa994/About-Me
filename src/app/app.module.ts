import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NavegationBarComponent } from './navegation-bar/navegation-bar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AllProyectsComponent } from './all-proyects/all-proyects.component';
import { ContacMeComponent } from './contac-me/contac-me.component';
import { ProyectComponent } from './proyect/proyect.component';

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
