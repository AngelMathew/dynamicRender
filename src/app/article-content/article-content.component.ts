import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map,Observable } from 'rxjs';
import {
  ComponentTemplate,
} from '../dynamic-renderer/render-template.types';
@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class ArticleContentComponent {
  componentData$:Observable<ComponentTemplate[]>=combineLatest([this.activatedRoute.paramMap,this.activatedRoute.data]).pipe(map(([param,cData])=>{return [cData['componentData'].find(val=> val.id==param.get('id'))]}))
  constructor(   private activatedRoute: ActivatedRoute) { }

}

