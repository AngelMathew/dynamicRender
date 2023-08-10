import { NgModuleRef, Type } from '@angular/core';

export type ComponentData = ComponentTemplate[]|ComponentTemplate
// {
//   children?: any[]|{};
// }
// & Partial<{
//   [key: string]: any;
// }>;

export interface StrapiTemplate {
  data:[],
  meta: {};

}
export interface ComponentTemplate {
  id:number,
  name: string;
  componentData: ComponentData;
}
export type DynamicComponent = {
  componentDataResolver: (data: ComponentData) => any;
};

export type DynamicModule = {
  entry: Type<any>;
  componentDataResolver: (data: ComponentData) => any;
};

export interface LoadedComponentModules {
  moduleRef: NgModuleRef<DynamicModule>;
  componentTemplate: ComponentTemplate;
}
