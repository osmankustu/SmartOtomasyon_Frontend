import { BaseEntity } from "../Common/BaseEntity";

export interface ImageCategoryModel extends BaseEntity{
    id:string
    name:string
    pageId:string
}