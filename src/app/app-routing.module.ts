import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ApplicationsComponent } from './Pages/applications/applications.component';
import { ReferancesComponent } from './Pages/referances/referances.component';
import { ProductsComponent } from './Pages/products/products.component';
import { ProductDetailComponent } from './Pages/products/product-detail/product-detail.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { DocumentsComponent } from './Pages/documents/documents.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'referances',component:ReferancesComponent},
  {path:'products',component:ProductsComponent},
  {path:'products/:cId',component:ProductsComponent},
  {path:'products/:cId/detail/:id',component:ProductDetailComponent},
  {path:'products/detail/:id',component:ProductDetailComponent},
  {path:'applications',component:ApplicationsComponent},
  {path:'applications/:Id',component:ApplicationsComponent},
  {path:'documents',component:DocumentsComponent},
  {path:'documents/:id',component:DocumentsComponent},
  {path:'contact',component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
