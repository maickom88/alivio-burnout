import { SwiperData } from '@alivio-burnout/shared/ui';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import contentCarouselJSON from '../assets/json/content-carousel.json';

import { delay } from 'rxjs/operators';

@Component({
  selector: 'alivio-burnout-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'alivio-burnout';
  data: Array<SwiperData> = contentCarouselJSON;

  readonly action = signal<Observable<unknown> | null>(null);

  testing(): void {
    this.action.set(of('test').pipe(delay(2000)));
  }
}
