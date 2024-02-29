import { Component, OnInit } from '@angular/core';
import { PublicService } from '../../../Services/public.service';
import { ProductModel } from '../../../Models/EntityModels/Product/ProductModel';
import { ProductCategoryModel } from '../../../Models/EntityModels/ProductCategory/ProductCategoryModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

  dataLoaded=false;
  productModel:ProductModel
  categoryModels:ProductCategoryModel[]

  constructor(
    private publicService:PublicService,
    private activatedRoute:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.GetAllCategory();
        this.GetProduct(params["id"]);
      }
    })
  }

  GetProduct(query:any){
    this.publicService.GetProductById(query).subscribe(response=>{
      this.productModel = response.data
      setTimeout(()=> this.dataLoaded = true,1000);
    })
  }

  GetAllCategory(){
    this.publicService.GetAllProductCategory().subscribe(response=>{
      this.categoryModels = response.data
    })
  }
}
