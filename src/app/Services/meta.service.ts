import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PublicService } from './public.service';
import { PageModel } from '../Models/EntityModels/Page/PageModel';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private meta:Meta,private title:Title,private publicService:PublicService) { }

  private pageModel:PageModel
  setTitle(query:any){
    this.publicService.GetByPageIdOfMeta(query).subscribe(response =>{
      this.pageModel = response.data
      this.title.setTitle(response.data.name);
      this.setMeta(this.pageModel)
    })
  }

 private setMeta(pageModel:PageModel){
    this.meta.removeTag("name='robots'")
    this.meta.removeTag("name='title'")
    this.meta.removeTag("name='language'")
    this.meta.removeTag("name='description'")
    this.meta.removeTag("name='keywords'")
    pageModel.metaTags.forEach((element)=>{
      this.meta.addTag({name:element.name,content:element.content});
    })
  }
  
}
