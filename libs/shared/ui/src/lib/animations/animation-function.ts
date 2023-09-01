import { AnimationTriggerMetadata, trigger, state, style } from '@angular/animations';
import { enterAnimation } from './enter-animation';
import { AnimationConfig } from './animations-constants';


export const inputAnimation = ({
  nameTag,
  animationDirection = 'left',
  durationEnter = '0.3s',
  customStyle = {},
  withOpacity = true,
}: AnimationConfig): AnimationTriggerMetadata => {
  
  const transform = animationDirection === 'zoom'? 'scale(1)' : 'translateX(0), translateY(0)';
  return trigger(nameTag, [
    state('animateTo', style({ transform: transform, ...customStyle })),
    enterAnimation(
      animationDirection,
      durationEnter,
      withOpacity),
  ]);
};
  