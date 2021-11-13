import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductComponent } from './components/views/product/product.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'products', component: ProductComponent},
  { path :'products/create', component: ProductCreateComponent},
  { path: 'products/delete/:id', component: ProductDeleteComponent},
  { path: 'products/update/:id', component: ProductUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
