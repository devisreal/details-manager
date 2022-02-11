import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { MaterialModule } from './shared/modules/material.module';
import { PhotosModule } from './shared/modules/photos.module';
import { ProductsModule } from './shared/modules/products.module';
import { PostsModule } from './shared/modules/posts.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';



const route: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    PhotosModule,
    PostsModule,
    ProductsModule,
    RouterModule.forRoot(route),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
