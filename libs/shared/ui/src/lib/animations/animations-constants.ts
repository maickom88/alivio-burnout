export interface CSStypeObject {
  [key: string]: string;
}

export type TypeAnimation = 'zoom' | 'bottom' | 'top' | 'left' | 'right';

export interface AnimationConfig {
  nameTag: string;
  animationDirection?: TypeAnimation;
  durationEnter?: string;
  customStyle?: CSStypeObject;
  withOpacity?: boolean;
  delay?: string;
}

export const ANIMATION_MAP: Record<TypeAnimation, string> = {
  top: 'translateY(-100%)',
  right: 'translateX(+100%)',
  bottom: 'translateY(+100%)',
  left: 'translateX(-100%)',
  zoom: 'scale(0.6)',
};
