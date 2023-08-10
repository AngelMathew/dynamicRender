import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent ,componentDataResolver} from './articles.component';
import { DynamicModule } from 'src/app/dynamic-renderer/render-template.types';
import { DynamicRendererModule } from '../../dynamic-renderer/dynamic-renderer/dynamic-renderer.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    CommonModule,DynamicRendererModule,RouterModule
  ]
})
export class ArticlesModule implements DynamicModule {
  entry = ArticlesComponent;
  componentDataResolver = componentDataResolver;
}
