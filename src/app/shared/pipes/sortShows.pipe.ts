import { Pipe, PipeTransform } from '@angular/core'
import { Show } from '../show/show.model'

@Pipe({
  name: 'SortShows',
})
export class SortShowsPipe implements PipeTransform {
  transform(showArr: Show[], sortBy: string) {
    showArr.sort((showA: Show, showB: Show) => {
      if (showA[sortBy] < showB[sortBy]) {
      return -1;
    } else if (showA[sortBy] > showB[sortBy]) {
      return 1;
    } else {
      return 0;
    }
  });
    return showArr;
  }
}
