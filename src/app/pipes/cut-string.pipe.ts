import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cutString"
})
export class CutStringPipe implements PipeTransform {
  transform(string: string): any {
    if (string.length >= 40) {
      return string.substring(0, 40) + "...";
    } else {
      return string;
    }
  }
}
