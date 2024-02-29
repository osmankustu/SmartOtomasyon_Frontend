import { Component, OnInit } from '@angular/core';
import { ReferanceModel } from '../../Models/EntityModels/Referance/ReferanceModel';
import { PublicService } from '../../Services/public.service';
import { MetaService } from '../../Services/meta.service';

@Component({
  selector: 'app-referances',
  templateUrl: './referances.component.html',
  styleUrl: './referances.component.css',
})
export class ReferancesComponent implements OnInit {
  referancesModel: ReferanceModel[] = [];
  dataLoaded = false;
  pageId:string="efb87f63-1be8-40b7-8141-d6ef2430f0b8";
  constructor(
    private publicService:PublicService,
    private metaService:MetaService
  ) {}

  ngOnInit(): void {
    this.metaService.setTitle(this.pageId);
    this.GetAll();
    setTimeout(() => (this.dataLoaded = true), 2000);
  }

  GetAll() {
    this.publicService.GetAllReferance().subscribe((response) => {
      this.referancesModel = response.data;
    });
  }
}
