import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTiesComponent } from './inventory-ties.component';

describe('InventoryTiesComponent', () => {
  let component: InventoryTiesComponent;
  let fixture: ComponentFixture<InventoryTiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryTiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryTiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
