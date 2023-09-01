import { ButtonComponent } from '@alivio-burnout/shared/ui';
import { DestroyRef, Directive, Input, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, finalize, of, switchMap, tap } from 'rxjs';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'alivio-burnout-button [action]',
  standalone: true,
})
export class ButtonActionDirective {
  readonly host = inject(ButtonComponent);
  readonly destroyRef = inject(DestroyRef);

  @Input() set action(value$: Observable<unknown> | null) {
    if (value$) {
      of(null)
        .pipe(
          takeUntilDestroyed(this.destroyRef),
          tap(() => this.host.loading.set(true)),
          switchMap(() => value$),
          finalize(() => this.host.loading.set(false))
        )
        // eslint-disable-next-line no-console
        .subscribe((value) => console.log('ok', value));
    }
  }
}
