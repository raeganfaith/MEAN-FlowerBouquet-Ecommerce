import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryFlowersComponent } from './inventory-flowers.component';

describe('InventoryFlowersComponent', () => {
  let component: InventoryFlowersComponent;
  let fixture: ComponentFixture<InventoryFlowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryFlowersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryFlowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
