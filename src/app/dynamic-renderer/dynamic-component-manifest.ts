import { DynamicModule } from './render-template.types';

type ComponentMap = {
  [name: string]: {
    loadModule: () => Promise<DynamicModule>;
  };
};

export const dynamicComponentMap: ComponentMap = {
  articles: {
    loadModule: () =>
      import('../dynamic-components/articles/articles.module').then(
        (m) => m.ArticlesModule as unknown as DynamicModule
      ),
  },
  header: {
    loadModule: () =>
      import('../dynamic-components/header/header.module').then(
        (m) => m.HeaderModule as unknown as DynamicModule
      ),
  },
  articlesPreview: {
    loadModule: () =>
      import('../dynamic-components/article-preview/article-preview.module').then(
        (m) => m.ArticlePreviewModule as unknown as DynamicModule
      ),
  },
};

export const dynamicComponentKeysSet = new Set(
  Object.keys(dynamicComponentMap)
);
