import { Component, OnInit } from '@angular/core';
import { DocumentCategoryModel } from '../../Models/EntityModels/DocumentCategory/DocumentCategoryModel';
import { DocumentModel } from '../../Models/EntityModels/Document/DocumentModel';
import { ActivatedRoute } from '@angular/router';
import { PublicService } from '../../Services/public.service';
import { MetaService } from '../../Services/meta.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css',
})
export class DocumentsComponent  implements OnInit{
  documentCategories: DocumentCategoryModel[] = [];
  documents: DocumentModel[] = [];
  documentName = "";
  dataLoaded = false;
  pageId:string="4d43cedb-eb44-4983-aa36-cef596bdb18e";

  constructor(
    private publicService:PublicService,
    private activatedRoute: ActivatedRoute,
    private metaService:MetaService
  ) {}

  ngOnInit(): void {
    this.metaService.setTitle(this.pageId);
    this.GetAllDocumentsCategory();
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCategoryOfDocuments(params['id']);
      } else {
        this.GetAllDocuments();
        
      }
    });
  }

  getCategoryOfDocuments(query: any) {
    this.publicService.GetByCategoryIdDocument(query).subscribe((response) => {
        this.documents = [];
        this.documents = response.data;
        setTimeout(()=> this.dataLoaded =true,1000);
      });
  }

  GetAllDocumentsCategory() {
    this.publicService.GetAllDocumentCategory().subscribe((response) => {
      this.documentCategories = response.data;
      setTimeout(()=>this.dataLoaded=true,1000)
    });
    
  }

  GetAllDocuments() {
    this.publicService.GetAllDocuments().subscribe((response) => {
      this.documents = response.data;
      setTimeout(()=>this.dataLoaded=true,1000)
    });
  }
}
