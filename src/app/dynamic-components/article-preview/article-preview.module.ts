import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePreviewComponent,componentDataResolver } from './article-preview.component';
import { DynamicModule } from 'src/app/dynamic-renderer/render-template.types';


@NgModule({
  declarations: [ArticlePreviewComponent],
  imports: [
    CommonModule
  ]
})
export class ArticlePreviewModule implements DynamicModule {
  entry = ArticlePreviewComponent;
  componentDataResolver = componentDataResolver;
}
