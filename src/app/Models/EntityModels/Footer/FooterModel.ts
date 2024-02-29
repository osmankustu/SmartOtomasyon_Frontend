import { MetaDefinition } from "@angular/platform-browser";
import { BaseEntity } from "../Common/BaseEntity";
import { PhoneNumberModel } from "../PhoneNumber/PhoneNumberModel";
import { SocialLinkModel } from "../SocialLink/SocialLinkModel";

export interface FooterModel extends BaseEntity{
    name:string
    adress:string
    mail:string
    socialLinks:SocialLinkModel[]
    phoneNumbers:PhoneNumberModel[]
    pageId:string
}