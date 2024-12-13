import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of, from, combineLatest, switchMap, delay, interval, pipe, concatMap, scan } from 'rxjs'

@Pipe({
  name: 'typewriter',
  standalone: true
})
export class TypewriterPipe implements PipeTransform {

  transform(text: string,speedWeights: Array<number>): Observable<string> {
    return this.#transform(text, speedWeights);
  }

  #transform(text: string, speeds: Array<number>): Observable<string> {
    const words = text.split(' ')

    if (!words) {
      return of(text)
    }

    return from(words).pipe(
      concatMap(word => of(word).pipe(
        delay(this.#pickRandom(speeds))
      )),
      scan((acc: string, word: string) => {
        return `${acc} ${word}`
      })
    )
  }

  #pickRandom(arr: Array<number>) :number {
    return arr[Math.floor(Math.random() * arr.length)]
  }

}
