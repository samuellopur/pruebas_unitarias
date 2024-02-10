import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingsComponent } from './greetings.component';
import { By } from '@angular/platform-browser';

describe('GreetingsComponent', () => {
  let component: GreetingsComponent;
  let fixture: ComponentFixture<GreetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('test exitoso', () => {
    expect(component).toBeTruthy();
  });

  it('test exitoso', () => {
    const mensajeElement = fixture.debugElement.query(By.css('.mensaje')).nativeElement;
    expect(mensajeElement.textContent).toContain('Valor por defecto');
  });

  it('test exitoso', () => {
    const mensajeElement = fixture.debugElement.query(By.css('.mensaje')).nativeElement;
    expect(mensajeElement.textContent).toContain(component.mensaje);
  });
});