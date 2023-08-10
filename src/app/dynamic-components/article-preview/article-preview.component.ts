import { Component } from '@angular/core';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss']
})
export class ArticlePreviewComponent {
  content;
  constructor() { }

}
export const componentDataResolver = (data: any) => {
  return {
    content: data,
  };
}
