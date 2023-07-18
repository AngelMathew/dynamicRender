import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DynamicComponent} from "../dynamic/dynamic.component";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends DynamicComponent {


}
