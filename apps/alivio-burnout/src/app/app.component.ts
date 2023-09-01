import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Observable, of } from 'rxjs';

import { delay } from 'rxjs/operators';

@Component({
  selector: 'alivio-burnout-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'alivio-burnout';

  readonly action = signal<Observable<unknown> | null>(null);

  testing(): void {
    this.action.set(of('test').pipe(delay(2000)));
  }
}
