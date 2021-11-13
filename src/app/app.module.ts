import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './components/views/home/home.component';
import { ProductComponent } from './components/views/product/product.component'
import { MatCardModule} from '@angular/material/card'; 
import { MatButtonModule} from '@angular/material/button'; 
import {  MatTableModule  } from '@angular/material/table'; 
import { HttpClientModule } from '@angular/common/http';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import {  MatFormFieldModule  } from '@angular/material/form-field'; 
import { FormsModule } from '@angular/forms';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
