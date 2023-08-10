import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicRendererModule } from '../dynamic-renderer/dynamic-renderer/dynamic-renderer.module';
import { ArticleContentComponent } from './article-content.component';
// import { DynamicModule } from 'src/app/dynamic-renderer/render-template.types';
@NgModule({
  declarations: [ArticleContentComponent],
  imports: [
    CommonModule,DynamicRendererModule
  ],
  exports:[ArticleContentComponent]
})
export class ArticleContentModule {}

