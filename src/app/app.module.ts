import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { CcComponent } from './test/cc/cc.component';
import { TestModule } from './test/test.module';
import { DataBindingComponent } from './data-binding/data-binding.component';

import { FormsModule } from '@angular/forms';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    OffresEmploiComponent,
    DataBindingComponent,
    ArticlesComponentComponent,
    ProductsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
