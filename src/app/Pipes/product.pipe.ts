import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from '../Models/EntityModels/Product/ProductModel';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  transform(value: ProductModel[], filterText: string): ProductModel[] {
    filterText = filterText?filterText.toLocaleLowerCase():"";
    
    return  filterText?value.filter((c:ProductModel)=>
    c.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
}
