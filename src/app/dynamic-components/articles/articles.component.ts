import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {

  constructor() { }
  blogs;
}
  export const componentDataResolver = (data: any) => {
    return {
      blogs: data,
    };
  }

