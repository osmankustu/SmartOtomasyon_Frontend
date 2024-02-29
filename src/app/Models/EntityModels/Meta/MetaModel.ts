import { BaseEntity } from "../Common/BaseEntity";

export interface MetaModel extends BaseEntity{
    name:string
    content:string
    pageId:string
}