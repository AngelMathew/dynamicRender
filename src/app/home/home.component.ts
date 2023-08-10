import { AfterViewInit, Component, OnInit } from '@angular/core';
import {StrapiService} from "../Strapi/strapi.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
componentData$=this.strapiService.getCombinedComponents();
constructor(private strapiService:StrapiService){

}

}


