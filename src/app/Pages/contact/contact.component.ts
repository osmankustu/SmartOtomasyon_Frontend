import { Component, OnInit } from '@angular/core';
import { FooterModel } from '../../Models/EntityModels/Footer/FooterModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicService } from '../../Services/public.service';
import { ToastrService } from 'ngx-toastr';
import { MetaService } from '../../Services/meta.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  footerModel: FooterModel[] = [];
  contactForm: FormGroup;
  dataLoaded = false;
  pageId:string="f0fb0639-94f8-4b0b-9c71-c8e145b60285"

  constructor(
    private formBuilder: FormBuilder,
    private publicService: PublicService,
    private toastrService: ToastrService,
    private metaService:MetaService
  ) {}

  ngOnInit(): void {
    this.metaService.setTitle(this.pageId);
    this.CreateContactForm();
    this.GetAllFooter();
    setTimeout(() => (this.dataLoaded = true), 1000);
  }

  GetAllFooter() {
    this.publicService.GetAllFooter().subscribe((response) => {
      this.footerModel = response.data;
    });
  }

  CreateContactForm() {
    this.contactForm = this.formBuilder.group({
      nameSureName: ['', Validators.required],
      Email: ['', Validators.required],
      message: ['', Validators.required],
      phone: [''],
      subject: ['', Validators.required],
    });
  }

  send() {
    if (this.contactForm.valid) {
      let contactModel = Object.assign(this.contactForm.value);
      this.publicService.PostContact(contactModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı !');
        },
        (responseError) => {
          this.toastrService.error(
            responseError.message,
            'Sunucu Kaynaklı Hata !'
          );
        }
      );
    } else {
      this.toastrService.warning('Formunuz Hatalıdır.', 'Dikkat');
    }
  }
}
