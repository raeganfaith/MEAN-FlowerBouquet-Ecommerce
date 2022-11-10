import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrangedBouquetComponent } from './arranged-bouquet.component';

describe('ArrangedBouquetComponent', () => {
  let component: ArrangedBouquetComponent;
  let fixture: ComponentFixture<ArrangedBouquetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrangedBouquetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrangedBouquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
