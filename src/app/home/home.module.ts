import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicRendererModule } from '../dynamic-renderer/dynamic-renderer/dynamic-renderer.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,DynamicRendererModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
