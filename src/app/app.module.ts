import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import {HttpClientModule} from '@angular/common/http';
 import { ArticleContentModule } from './article-content/article-content.module';
import { NotfoundComponent } from './notfound/notfound.component'



@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HomeModule,HttpClientModule,ArticleContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
