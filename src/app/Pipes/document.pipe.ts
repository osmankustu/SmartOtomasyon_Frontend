import { Pipe, PipeTransform } from '@angular/core';
import { DocumentModel } from '../Models/EntityModels/Document/DocumentModel';

@Pipe({
  name: 'document'
})
export class DocumentPipe implements PipeTransform {

  transform(value: DocumentModel[], filterText: string): DocumentModel[] {
    filterText = filterText?filterText.toLocaleLowerCase():"";
    
    return  filterText?value.filter((c:DocumentModel)=>
    c.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
