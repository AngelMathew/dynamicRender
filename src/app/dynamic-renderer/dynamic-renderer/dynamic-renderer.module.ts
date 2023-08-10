import { NgModule } from '@angular/core';
import { DynamicRendererComponent } from './dynamic-renderer.component';
import {DynamicComponentsService} from '../dynamic-component.service'

@NgModule({
  declarations: [DynamicRendererComponent],
  exports:[DynamicRendererComponent],
  providers:[DynamicComponentsService]

})
export class DynamicRendererModule { }
