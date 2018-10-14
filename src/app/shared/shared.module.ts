import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from 'shared/services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  declarations: [],
  providers: [
    UsersService
  ],
  exports: [
    
  ]
})
export class SharedModule { }
