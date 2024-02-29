import { Component, OnInit } from '@angular/core';
import { PublicService } from '../../Services/public.service';
import { ImageCategoryModel } from '../../Models/EntityModels/ImageCategory/ImageCategoryModel';
import { ImageModel } from '../../Models/EntityModels/Image/ImageModel';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from '../../Services/meta.service';
import { PageResponse } from '../../Models/ResponseModels/Common/PageResponse';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.css',
})
export class ApplicationsComponent implements OnInit {
  imageCategory:ImageCategoryModel[]=[]
  images:ImageModel[]=[]
  pageResponse:PageResponse
  dataLoaded=false;
  pageId:string="a53797eb-46bd-4f67-8a33-7c2ee4881af0";

  pageSize:number[]=[];

  size:number =6;
  index:number;

  query:boolean=false;
  queryString:string=""
  
  constructor(
    private publicService:PublicService,
    private activatedRoute:ActivatedRoute,
    private metaService:MetaService
  ) {}
  ngOnInit(): void {
    this.metaService.setTitle(this.pageId);
    this.GetAllImage();
    this.GetAllCategory();
    this.activatedRoute.params.subscribe(params=>{
      if(params["Id"]){
        this.GetByCategoryIdImage(params["Id"]);
        this.query = true;
        this.queryString= params["Id"];
      }else{
        this.GetAllImage();
      }
    })
  }

  GetAllImage(pageIndex?:number,pageSize?:number){
   
    this.publicService.GetAllImage(pageIndex,pageSize).subscribe(response=>{
      this.images=[]
      this.images = response.data
      this.pageResponse = response
      this.createPaggingCounterButton(this.pageResponse);
      this.index = this.pageResponse.pageIndex
      setTimeout(()=>this.dataLoaded = true,1000);
    })
  }

  GetAllCategory(){
    this.publicService.GetAllImageCategory().subscribe(response=>{
      this.imageCategory = response.data
      setTimeout(()=>this.dataLoaded=true,1000);
    })
  }

  GetByCategoryIdImage(query:any,pageIndex?:number,pageSize?:number){
    this.publicService.GetByCategoryId(query,pageIndex,pageSize).subscribe(response=>{
      this.images=[];
      this.images = response.data
      this.pageResponse = response
      this.createPaggingCounterButton(this.pageResponse);
      this.index = this.pageResponse.pageIndex
    })
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
