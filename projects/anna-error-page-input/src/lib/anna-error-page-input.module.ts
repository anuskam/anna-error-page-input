import { NgModule } from '@angular/core';
import { AnnaErrorPageComponent } from './anna-error-page-input.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AnnaErrorPageComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    AnnaErrorPageComponent
  ]
})
export class AnnaErrorPageModule { }
