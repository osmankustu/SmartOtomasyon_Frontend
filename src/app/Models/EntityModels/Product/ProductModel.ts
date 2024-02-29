import { BaseEntity } from "../Common/BaseEntity";

export interface ProductModel extends BaseEntity{
    name:string
    description:string
    imgUri:string
    userManualUri:string
    techDocumentUri:string
}