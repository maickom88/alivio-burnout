import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselComponent } from './carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


function initCarouselAnimate(component: CarouselComponent): void {
  component.data = [{
    title: '',
    subtitle: '',
    backgroundColor: '',
    src: ''
  }];

  component.ngOnInit();
}

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [CarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should ensure swiper instance is made', () => {
    expect(component.swiper).toBeTruthy();
  });
  it('Should ensure swiperHeader instance is made', () => {
    expect(component.swiperHeader()).not.toBeTruthy();

    initCarouselAnimate(component);

    expect(component.swiperHeader()).toBeTruthy();
  });

  it('Should ensure two state on loadAnimation', () => {
    initCarouselAnimate(component);
    expect(component.loadAnimation()).toBe(true);
  });
});
