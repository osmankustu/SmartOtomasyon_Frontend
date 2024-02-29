import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomainService } from './Common/domain.service';
import { Observable } from 'rxjs';
import { ListServiceResponse } from '../Models/ResponseModels/ListServiceResponse';
import { FooterModel } from '../Models/EntityModels/Footer/FooterModel';
import { SingleServiceResponse } from '../Models/ResponseModels/SingleServiceResponse';
import { HomeModel } from '../Models/EntityModels/Home/HomeModel';
import { AboutModel } from '../Models/EntityModels/About/AboutModel';
import { ImageCategoryModel } from '../Models/EntityModels/ImageCategory/ImageCategoryModel';
import { ImageModel } from '../Models/EntityModels/Image/ImageModel';
import { ReferanceModel } from '../Models/EntityModels/Referance/ReferanceModel';
import { ProductModel } from '../Models/EntityModels/Product/ProductModel';
import { ProductCategoryModel } from '../Models/EntityModels/ProductCategory/ProductCategoryModel';
import { DocumentCategoryModel } from '../Models/EntityModels/DocumentCategory/DocumentCategoryModel';
import { DocumentModel } from '../Models/EntityModels/Document/DocumentModel';
import { PageModel } from '../Models/EntityModels/Page/PageModel';
import { PagginatedServiceResponse } from '../Models/ResponseModels/PagginatedResponse';

@Injectable({
  providedIn: 'root',
})
export class PublicService {
  constructor(
    private httpClient: HttpClient,
    private domainService: DomainService
  ) {}

  //Footer
  GetAllFooter(): Observable<ListServiceResponse<FooterModel>> {
    return this.httpClient.get<ListServiceResponse<FooterModel>>(
      this.domainService.productionDomain + 'public/footer'
    );
  }

  PostContact(command:any):Observable<SingleServiceResponse<string>>{
    return this.httpClient.post<SingleServiceResponse<string>>(this.domainService.productionDomain+"public",command);
  }

  GetAllHome(): Observable<SingleServiceResponse<HomeModel>> {
    return this.httpClient.get<SingleServiceResponse<HomeModel>>(
      this.domainService.productionDomain + 'Public/home'
    );
  }

  GetAllAbout(): Observable<ListServiceResponse<AboutModel>> {
    return this.httpClient.get<ListServiceResponse<AboutModel>>(
      this.domainService.productionDomain + 'public/About'
    );
  }

  GetAllReferance(): Observable<ListServiceResponse<ReferanceModel>> {
    return this.httpClient.get<ListServiceResponse<ReferanceModel>>(
      this.domainService.productionDomain + 'public/referance'
    );
  }

  //Image
  GetAllImage(pageIndex:number=0,pageSize:number=6): Observable<PagginatedServiceResponse<ImageModel>> {
    return this.httpClient.get<PagginatedServiceResponse<ImageModel>>(
      this.domainService.productionDomain + 'public/image?pageIndex='+pageIndex+'&&pageSize='+pageSize
    );
  }

  GetByCategoryId(Id: string,pageIndex:number=0,pageSize:number=6): Observable<PagginatedServiceResponse<ImageModel>> {
    return this.httpClient.get<PagginatedServiceResponse<ImageModel>>(
      this.domainService.productionDomain + 'public/image/' + Id+"?pageIndex="+pageIndex+"&pageSize="+pageSize
    );
  }

  GetAllImageCategory(): Observable<ListServiceResponse<ImageCategoryModel>> {
    return this.httpClient.get<ListServiceResponse<ImageCategoryModel>>(
      this.domainService.productionDomain + 'public/imageCategory'
    );
  }

  //Product
  GetAllProduct(pageIndex:number=0,pageSize:number=6): Observable<PagginatedServiceResponse<ProductModel>> {
    return this.httpClient.get<PagginatedServiceResponse<ProductModel>>(
      this.domainService.productionDomain + 'public/products?pageIndex='+pageIndex+"&pageSize="+pageSize
    );
  }

  GetByCategoryIdProduct(
    id: string,pageIndex:number=0,pageSize:number=6
  ): Observable<PagginatedServiceResponse<ProductModel>> {
    return this.httpClient.get<PagginatedServiceResponse<ProductModel>>(
      this.domainService.productionDomain + 'public/products/category/' + id+"?pageIndex="+pageIndex+"&pageSize="+pageSize
    );
  }

  GetProductById(id: string): Observable<SingleServiceResponse<ProductModel>> {
    return this.httpClient.get<SingleServiceResponse<ProductModel>>(
      this.domainService.productionDomain + 'public/products/' + id
    );
  }

  GetAllProductCategory(): Observable<
    ListServiceResponse<ProductCategoryModel>
  > {
    return this.httpClient.get<ListServiceResponse<ProductCategoryModel>>(
      this.domainService.productionDomain + 'public/productCategory'
    );
  }

  //Documents
  GetAllDocumentCategory(): Observable<
    ListServiceResponse<DocumentCategoryModel>
  > {
    return this.httpClient.get<ListServiceResponse<DocumentCategoryModel>>(
      this.domainService.productionDomain + 'public/DocumentCategory'
    );
  }

  GetAllDocuments(): Observable<ListServiceResponse<DocumentModel>> {
    return this.httpClient.get<ListServiceResponse<DocumentModel>>(
      this.domainService.productionDomain + 'public/Document'
    );
  }

  GetByCategoryIdDocument(
    query: any
  ): Observable<ListServiceResponse<DocumentModel>> {
    return this.httpClient.get<ListServiceResponse<DocumentModel>>(
      this.domainService.productionDomain + 'public/document/category/' + query
    );
  }

  //Pagging

  GetByPageIdOfMeta(query:any):Observable<SingleServiceResponse<PageModel>>{
    return this.httpClient.get<SingleServiceResponse<PageModel>>(this.domainService.productionDomain+"Page/public/"+query);
  }

  
}
