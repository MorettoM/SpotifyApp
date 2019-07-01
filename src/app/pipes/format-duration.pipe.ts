import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formatDuration"
})
export class FormatDurationPipe implements PipeTransform {
  transform(duration: number): string {
    let seconds = duration / 1000;
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    return minutes.toString() + ":" + Math.round(seconds).toString();
  }
}
