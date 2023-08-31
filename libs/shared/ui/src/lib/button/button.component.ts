import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';


export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonSize = undefined | 'sm' | 'lg';
export type ButtonStyle = 'primary' | 'success' | 'secondary' | 'danger';

@Component({
  selector: 'alivio-burnout-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class ButtonComponent {
  @Input({ required: true }) label!: string;
  @Input() labelLoading?: string;
  @Input() hasSuffix = false;
  @Input() buttonStyle: ButtonStyle = 'primary';
  @Input() type: ButtonType = 'button';
  @Input() buttonSize?: ButtonSize;
  @Input() disabled = false;
  @Output() clickEvent = new EventEmitter<void>();
  loading = signal(false);
}



