import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { inputAnimation } from '../animations/animation-function';
import { ButtonStyle, ButtonType, ButtonSize } from './button-constants';

@Component({
  selector: 'alivio-burnout-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [inputAnimation({ nameTag: 'InputAnimation', animationDirection: 'zoom' })],
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
