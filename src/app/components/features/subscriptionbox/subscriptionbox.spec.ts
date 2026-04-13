import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subscriptionbox } from './subscriptionbox';

describe('Subscriptionbox', () => {
  let component: Subscriptionbox;
  let fixture: ComponentFixture<Subscriptionbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subscriptionbox],
    }).compileComponents();

    fixture = TestBed.createComponent(Subscriptionbox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
