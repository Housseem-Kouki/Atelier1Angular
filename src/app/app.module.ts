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
import { HeaderComponent } from './header/header.component';
import { NotfoundOageComponent } from './notfound-oage/notfound-oage.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UsersComponent } from './users/users.component';
import { TodoUserComponent } from './todo-user/todo-user.component';


@NgModule({
  declarations: [
    AppComponent,
    OffresEmploiComponent,
    DataBindingComponent,
    ArticlesComponentComponent,
    ProductsComponent,
    HeaderComponent,
    NotfoundOageComponent,
    UpdateProductComponent,
    AddProductComponent,
    TemplateDrivenFormComponent,
    TodoListComponent,
    UsersComponent,
    TodoUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestModule,
    FormsModule,
    HttpClientModule
    
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
