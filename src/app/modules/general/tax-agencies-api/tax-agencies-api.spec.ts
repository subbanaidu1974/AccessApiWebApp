import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxAgenciesApi } from './tax-agencies-api';

describe('TaxAgenciesApi', () => {
  let component: TaxAgenciesApi;
  let fixture: ComponentFixture<TaxAgenciesApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxAgenciesApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxAgenciesApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
