import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpperNavComponent } from './Components/upper-nav/upper-nav.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ApplicationsComponent } from './Pages/applications/applications.component';
import { ReferancesComponent } from './Pages/referances/referances.component';
import { ProductsComponent } from './Pages/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductPipe } from './Pipes/product.pipe';
import { ProductDetailComponent } from './Pages/products/product-detail/product-detail.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { DocumentsComponent } from './Pages/documents/documents.component';
import { DocumentPipe } from './Pipes/document.pipe';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UpperNavComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ApplicationsComponent,
    ReferancesComponent,
    ProductsComponent,
    ProductPipe,
    ProductDetailComponent,
    ContactComponent,
    DocumentsComponent,
    DocumentPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'
    })
  ],
  providers: [
    provideClientHydration(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
