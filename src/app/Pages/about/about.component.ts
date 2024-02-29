import { Component, OnInit } from '@angular/core';
import { AboutModel } from '../../Models/EntityModels/About/AboutModel';
import { PublicService } from '../../Services/public.service';
import { MetaService } from '../../Services/meta.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  aboutModel: AboutModel[] = [];
  dataLoaded = false;
  pageId:string="ada2e325-50d6-4bf7-b8fb-9a9b0bdf6b1d";

  constructor(
    private publicService:PublicService,
    private metaService:MetaService
  ) {}
  ngOnInit(): void {
    this.metaService.setTitle(this.pageId);
    this.getAbout();
  }

  getAbout() {
    this.publicService.GetAllAbout().subscribe(response=>{
      this.aboutModel = response.data
      this.dataLoaded = true;
    })
  }

}
