import { BaseEntity } from "../Common/BaseEntity";

export interface ImageModel extends BaseEntity{
    name:string
    uri:string
    imageCategoryId:string
}