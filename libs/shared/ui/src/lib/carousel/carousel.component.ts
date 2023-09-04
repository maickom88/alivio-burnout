import { ChangeDetectionStrategy, Component, Input, OnInit, signal } from '@angular/core';
import Swiper from 'swiper';
import { inputAnimation } from '../animations/animation-function';
import { delay, tap } from 'rxjs';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';

export interface SwiperData {
  title: string;
  subtitle: string;
  src: string;
  alt?: string;
  backgroundColor: string;
}

interface SwiperHeader {
  title: string;
  subtitle: string;
}

@Component({
  selector: 'alivio-burnout-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [inputAnimation({ nameTag: 'AnimationText', animationDirection: 'zoom' })],
})
export class CarouselComponent implements OnInit {
  readonly currentIndex = signal<number | undefined>(0);
  readonly swiperHeader = signal<SwiperHeader | undefined>(undefined);
  readonly loadAnimation = signal<boolean>(false);

  swiper: Swiper | undefined;
  @Input({ required: true }) data: ReadonlyArray<SwiperData> = [];

  constructor() {
    this.observableAnimation();
  }

  ngOnInit(): void {
    this.buildSwiper();
    this.listenerSwiperEvent();
    this.initSwiperHeaderAndAnimation();
  }

  private observableAnimation(): void {
    const $observable = toObservable(this.currentIndex);
    $observable
      .pipe(
        takeUntilDestroyed(),
        tap(() => this.loadAnimation.set(false)),
        delay(0),
        tap(() => this.loadAnimation.set(true))
      )
      .subscribe();
  }

  private initSwiperHeaderAndAnimation(): void {
    this.swiperHeader.set(this.data[0]);
    this.loadAnimation.set(true);
  }

  private buildSwiper(): void {
    this.swiper = new Swiper('.swiper-container', {
      width: 400,
      centeredSlides: true,
      roundLengths: true,
      grabCursor: true,
      spaceBetween: 1,
      slidesPerView: 1,
    });
  }
  private listenerSwiperEvent(): void {
    this.swiper?.on('slideChange', () => {
      this.currentIndex.set(this.swiper?.activeIndex);
      if (this.swiper?.activeIndex) {
        this.swiperHeader.set(this.data[this.swiper.activeIndex]);
      } else {
        this.swiperHeader.set(this.data[0]);
      }
    });
  }
}
