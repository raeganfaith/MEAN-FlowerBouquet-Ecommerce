import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBouquetComponent } from './inventory-bouquet.component';

describe('InventoryBouquetComponent', () => {
  let component: InventoryBouquetComponent;
  let fixture: ComponentFixture<InventoryBouquetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryBouquetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryBouquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
