import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DynamicComponent} from "../dynamic/dynamic.component";

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent extends DynamicComponent {


}
