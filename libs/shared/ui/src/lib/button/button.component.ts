import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';


export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonSize = undefined | 'sm' | 'lg';
export type ButtonStyle =  'primary' | 'success' | 'secondary' | 'danger';

@Component({
  selector: 'alivio-burnout-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

