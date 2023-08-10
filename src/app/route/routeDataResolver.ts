import { inject } from '@angular/core';
import {
  ResolveFn,
  Router,
} from '@angular/router';
import { EMPTY, catchError,map } from 'rxjs';
import {StrapiService} from '../Strapi/strapi.service'
export const routeDataResolver: ResolveFn<any> = () => {
  const router = inject(Router);
  const strapi=inject(StrapiService)

  return strapi.getArticles().pipe(map(component=> component.componentData),
    catchError((_) => {
      router.navigateByUrl('/not-found');
      return EMPTY;
    })
  );
};
