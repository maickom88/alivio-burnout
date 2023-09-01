import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { SharedUiModule } from '../shared-ui.module';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;


    fixture.detectChanges();
  });

  it('should make sure click dispatch event', () => {
    const spyEvent = jest.spyOn(component.clickEvent, 'emit');

    component.clickEvent.emit();
    expect(spyEvent).toHaveBeenCalled();
  });

  it('should make sure you have arguments', () => {
    component.buttonStyle = 'primary';
    expect(component.buttonStyle).toBeTruthy();
  });

  
});
