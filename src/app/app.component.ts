import { Component, Input, OnInit } from '@angular/core';
import { FooterModel } from './Models/EntityModels/Footer/FooterModel';
import { PublicService } from './Services/public.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'SmartOtomasyon_Public';
  footerModel: FooterModel[] = [];
  date: any;
  dateX = new Date();
  
  constructor(private publicService: PublicService) {}
  
  ngOnInit(): void {
    this.Footer();
    this.date = this.dateX.getFullYear();
  }

  Footer() {
    this.publicService.GetAllFooter().subscribe((response) => {
      this.footerModel = response.data;
    });
  }
}
