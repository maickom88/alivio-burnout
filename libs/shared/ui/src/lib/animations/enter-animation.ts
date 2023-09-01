import { animate, style, transition } from '@angular/animations';
import { ANIMATION_MAP, TypeAnimation } from './animations-constants';

export const enterAnimation = (animationDirection: TypeAnimation, durationEnter: string, withOpacity: boolean) => {
  const opacity = withOpacity ? '0' : '1';
  const transform = ANIMATION_MAP[animationDirection];

  return transition(
    ':enter',
    [style({ transform: transform, opacity: opacity }), animate(`${durationEnter} {{delay}} ease-in`)],
    { params: { delay: '0ms' } }
  );
};
