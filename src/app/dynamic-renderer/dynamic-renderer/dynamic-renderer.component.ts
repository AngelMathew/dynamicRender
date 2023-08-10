import { Component, ComponentRef,
  Input,
  ViewChild,
  ViewContainerRef,AfterViewInit } from '@angular/core';
  import { DynamicComponentsService } from '../dynamic-component.service';
  import { isFulfilled } from '../utils';
 import {
   ComponentTemplate,
   LoadedComponentModules,
 } from '../render-template.types';

@Component({
  selector: 'app-dynamic-renderer',
  template: `<ng-template #container></ng-template>`,

})
export class DynamicRendererComponent implements AfterViewInit {

  @Input() components: ComponentTemplate[];
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  private componentRefs: ComponentRef<any>[] = [];

  constructor(
    private dynamicComponentsService: DynamicComponentsService
  ) {}

  ngOnDestroy() {
    this.componentRefs.forEach((ref) => ref.destroy());
    if (this.container) {
      this.container.clear();
    }
  }

  ngAfterViewInit(): void {
    if (!this.container || !this.components || this.components.length === 0) {
      return;
    }

    this.componentRefs.forEach((ref) => ref.destroy()); // clear all refs

    const loadedComponentModules = this.components
      .filter((componentData) =>

        this.dynamicComponentsService.checkComponentMap(componentData)
        )
      .map((componentTemplate) => {
        return this.dynamicComponentsService
          .loadComponentModule(componentTemplate.name)
          .then((moduleRef) => ({ moduleRef, componentTemplate }));
      });

    this.container?.clear(); // clear the container that holds the components
    this.renderComponents(loadedComponentModules);
  }

  renderComponents(
    loadedComponentFactories: Promise<LoadedComponentModules>[]
  ) {
    Promise.allSettled(loadedComponentFactories).then(
      (settledModules: PromiseSettledResult<LoadedComponentModules>[]) => {
        try {
          for (let module of settledModules) {
             if (isFulfilled(module)) {
              const newComponent =
                this.dynamicComponentsService.createComponent(
                  this.container,
                  module.value.componentTemplate,
                  module.value.moduleRef
                );
              if (newComponent) {
                this.componentRefs.push(newComponent);
              }
            } else {
              // is rejected
              throw new Error(module.reason);
            }
          }
        } catch (e) {
          console.error(e);
        }

      }
    );
  }
}
