import { MetaDefinition } from "@angular/platform-browser";
import { BaseEntity } from "../Common/BaseEntity";
import { MetaModel } from "../Meta/MetaModel";

export interface PageModel extends BaseEntity{
    name:string
    metaTags:MetaDefinition[]
}