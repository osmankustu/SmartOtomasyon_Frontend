import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeModel } from '../../Models/EntityModels/Home/HomeModel';
import { PublicService } from '../../Services/public.service';
import { MetaService } from '../../Services/meta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  dataLoaded = false;
  brandsOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 10
      }
    },
    nav: false,
    margin:10,
    autoWidth:true,
    autoplay:true
  }
  imageOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['Önceki', 'Sonraki'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 10
      }
    },
    nav: true,
    margin:20,
    autoWidth:true,
    autoplay:true,
    center:true
  }
  mainOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    items:3,
    navSpeed: 700,
    navText: ['Önceki', 'Sonraki'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false,
    margin:25,
    autoHeight:false,
    autoWidth:true,
    center:true,
    autoplay:true
  }
/**
 *
 */
constructor( private publicService:PublicService, private metaService:MetaService) {
}
  home:HomeModel
  pageId:string="971f86f2-cbad-44c7-b4ae-f25c041a795f";
  ngOnInit(): void {
    this.metaService.setTitle(this.pageId);
    this.GetHome();
  }

  GetHome(){
    this.publicService.GetAllHome().subscribe(response =>{
      this.home = response.data
    })
  }
}
