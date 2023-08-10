import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ArticleContentComponent} from "./article-content/article-content.component"
import {routeDataResolver} from "./route/routeDataResolver"
import { NotfoundComponent } from './notfound/notfound.component'
const routes: Routes = [


  {path:'',component:HomeComponent},
  {
    path: 'article/:id',
    component: ArticleContentComponent,
    resolve: { componentData: routeDataResolver },
  },
  {path:'**',component:NotfoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
