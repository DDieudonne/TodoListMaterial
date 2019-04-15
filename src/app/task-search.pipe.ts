import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskSearch'
})
export class TaskSearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.toLowerCase().includes(searchText);
    });
  }
}
