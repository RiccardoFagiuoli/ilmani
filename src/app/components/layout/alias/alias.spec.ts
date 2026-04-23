import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alias } from './alias';

describe('Alias', () => {
  let component: Alias;
  let fixture: ComponentFixture<Alias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alias],
    }).compileComponents();

    fixture = TestBed.createComponent(Alias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
