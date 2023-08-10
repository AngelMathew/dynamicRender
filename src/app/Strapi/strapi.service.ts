import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { combineLatest,Observable,map,catchError } from 'rxjs';
import { API_CONFIG } from '../api.config';

const params = new HttpParams().set('populate', 'componentData.componentData.componentData');

@Injectable({
  providedIn: 'root'
})

export class StrapiService {

  constructor(private httpClient: HttpClient) { }

  getArticles(){
    const articleUrl = API_CONFIG.baseUrl + API_CONFIG.articles;
    return this.httpClient.get(articleUrl,{params}).pipe(map((articles:any)=>articles.data[0].attributes.componentData))
  }

getCombinedComponents(): Observable<any[]>{
  const articleUrl = API_CONFIG.baseUrl + API_CONFIG.articles;
  const headerUrl = API_CONFIG.baseUrl + API_CONFIG.headers;

  const headerRequest$ = this.httpClient.get(headerUrl, { params});
  const articleRequest$ = this.httpClient.get(articleUrl,{ params});
  return combineLatest([headerRequest$, articleRequest$]).pipe(
    map(([headerResponse, articleResponse]: any) => {
      const combinedData = [
        headerResponse.data[0].attributes.componentData,
        articleResponse.data[0].attributes.componentData
      ];
      return combinedData;
    }),
    catchError(error => {
      console.error('Error fetching combined components:', error);
      return []; // Return an empty array in case of an error
    })
  );
}
}
