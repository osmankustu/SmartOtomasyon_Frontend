import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FooterModel } from '../../Models/EntityModels/Footer/FooterModel';
import { PublicService } from '../../Services/public.service';

@Component({
  selector: 'app-upper-nav',
  templateUrl: './upper-nav.component.html',
  styleUrl: './upper-nav.component.css',
})
export class UpperNavComponent {
  @Input() footerModel: FooterModel[] = [];
}
