import { CenterContent } from "../CenterContent/CenterContentModel"
import { PartnerModel } from "../Partner/PartnerModel"
import { EndContent } from "../EndContent/EndContentModel"
import { ImageModel } from "../Image/ImageModel"
import { SliderModel } from "../Slider/SliderModel"

export interface HomeModel {
    name:string
    pageId:string
    sliders:SliderModel[]
    centerContents:CenterContent[]
    partners:PartnerModel[]
    endContents:EndContent[]
    workImages:ImageModel[]
}