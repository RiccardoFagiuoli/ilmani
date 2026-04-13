import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prefooter } from './prefooter';

describe('Prefooter', () => {
  let component: Prefooter;
  let fixture: ComponentFixture<Prefooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prefooter],
    }).compileComponents();

    fixture = TestBed.createComponent(Prefooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
