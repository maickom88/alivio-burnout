import { SharedUiModule } from '@alivio-burnout/shared/ui';
import { ButtonActionDirective } from './button-action.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { By } from '@angular/platform-browser';



@Component({
  template: `<alivio-burnout-button [action]="action()" (clickEvent)="testing()"  
  [hasSuffix]="true" buttonStyle="secondary" label="Iniciar Avaliação"></alivio-burnout-button>`
})
class TestComponent {
  readonly action = signal<Observable<unknown> | null>(null);


  testing(): void {
    this.action.set(of('test value'));

  }
}

describe('ButtonActionDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let buttonElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [ButtonActionDirective, SharedUiModule.forRoot(),],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    buttonElement = fixture.debugElement.query(By.directive(ButtonActionDirective));
    fixture.detectChanges();
  });

  it('should make sure call action with any Observable', () => {
    const directive = buttonElement.injector.get(ButtonActionDirective);
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    const spyActionDirective = jest.spyOn(directive, 'action', 'set');
    fixture.detectChanges();
    expect(spyActionDirective).toHaveBeenCalledWith(expect.any(Observable));
  });

});
