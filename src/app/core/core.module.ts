import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  declarations: [NavBarComponent, HomeComponent],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule { }
