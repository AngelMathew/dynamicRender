import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  title
  constructor() { }


}
export const componentDataResolver = (data: any) => {
  return {
    title: data.title,
  };
}
