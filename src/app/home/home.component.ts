import { Component, OnInit,ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ArticlesComponent } from '../articles/articles.component';
import {DynamicComponent} from "../dynamic/dynamic.component";
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('container', {static:true, read: ViewContainerRef })
  container: ViewContainerRef | undefined;

  private mappings = {
     'header': HeaderComponent,
     'articles': ArticlesComponent,
  };

  items={
    "items": [
      {
        "id": 2,
        "type": "header",
        "title": "HeaderComponent",
        "content":[{
          "title":" The Alchemist",
          "subTitle":"Paulo Coelho",
          "summary":"home component"
        },
        {
          "title":" Kite Runner",
          "subTitle":"Khalid",
          "summary":"home component"
        }],
        "hidden": false
      },
      {
        "id": 1,
        "type": "articles",
        "title": "ArticlesComponent",
        "content":[{
          "title":" The Alchemist",
          "subTitle":"Paulo Coelho",
          "summary":"home component"
        }],
        "hidden": false
      },

    ]
  }
  private componentRef:ComponentRef<{}>;
  constructor() { }

  ngOnInit(): void {
    for (const item of this.items.items) {
      let componentType = this.getType(item.type);
      this.componentRef=this.container.createComponent(componentType);
      // set title
      let instance = <DynamicComponent>this.componentRef.instance;
       instance.title = item.title;
      instance.content = item.content;

      }
    }
    getType(typeName: string) {
      let type = this.mappings[typeName];
      return type;
    }
  }


