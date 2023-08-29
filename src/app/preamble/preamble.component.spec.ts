import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreambleComponent } from './preamble.component';

describe('PreambleComponent', () => {
  let component: PreambleComponent;
  let fixture: ComponentFixture<PreambleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreambleComponent]
    });
    fixture = TestBed.createComponent(PreambleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
