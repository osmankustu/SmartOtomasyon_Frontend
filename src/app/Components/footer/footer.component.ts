import { Component, Input, OnInit, input } from '@angular/core';
import { FooterModel } from '../../Models/EntityModels/Footer/FooterModel';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() footerModel: FooterModel[] = [];
  @Input() date: any;
}
