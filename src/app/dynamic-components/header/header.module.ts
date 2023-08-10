import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent,componentDataResolver } from './header.component';
import { DynamicModule } from 'src/app/dynamic-renderer/render-template.types';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule implements DynamicModule {
  entry = HeaderComponent;
  componentDataResolver = componentDataResolver;
}
