import { Component, OnInit } from '@angular/core';
import { ProductCategoryModel } from '../../Models/EntityModels/ProductCategory/ProductCategoryModel';
import { ProductModel } from '../../Models/EntityModels/Product/ProductModel';
import { PublicService } from '../../Services/public.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaService } from '../../Services/meta.service';
import { PageResponse } from '../../Models/ResponseModels/Common/PageResponse';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productCategory: ProductCategoryModel[] = [];
  productsModel: ProductModel[] = [];
  dataLoaded = false;
  productName = '';
  pageId:string="f00061f3-b35d-433a-8751-d56b0b744ab7"

  pageResponse:PageResponse

  pageSize:number[]=[];
  size:number =6;
  index:number;
  query:boolean=false;
  queryString:string=""

  constructor(
    private publicService: PublicService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private metaService:MetaService
  ) {}

  ngOnInit(): void {
    this.metaService.setTitle(this.pageId);
    this.activatedRoute.params.subscribe(params=>{
      if(params["cId"]){
        this.query = true;
        this.queryString = params["cId"]
        this.GetByCategoryId(params["cId"]);
      }
      else if(params["id"]){
        this.router.navigate(["products/detail/"+params["id"]])
      }
      else{
        this.GetAllProducts()
      }
    })
    this.GetAllCategory();
  }

  GetAllCategory() {
    this.publicService.GetAllProductCategory().subscribe((response) => {
      this.productCategory = response.data;
      setTimeout(() => (this.dataLoaded = true), 1000);
    });
  }

  GetAllProducts(pageIndex?:number,pageSize?:number) {
    this.publicService.GetAllProduct(pageIndex,pageSize).subscribe((response) => {
      this.productsModel = response.data;
      this.pageResponse = response
      this.createPaggingCounterButton(this.pageResponse);
      this.index = this.pageResponse.pageIndex

    });
  }

  GetByCategoryId(id: string,pageIndex?:number,pageSize?:number) {
    this.publicService.GetByCategoryIdProduct(id,pageIndex,pageSize).subscribe((response) => {
      this.productsModel = [];
      this.productsModel = response.data;
      this.pageResponse= response
      this.createPaggingCounterButton(this.pageResponse);
      this.index = this.pageResponse.pageIndex
    });
  }

  itemActive(index:number,pageIndex:number):string{

    if(index-1 == pageIndex){
      return "page-link active";
    }
    return"page-link";
  }

  private createPaggingCounterButton(pageResponse:PageResponse){
    this.pageSize =[]
    for(let i=0; i<pageResponse.pageCount; i++){
      this.pageSize.push(i+1);
    }
  }
}
