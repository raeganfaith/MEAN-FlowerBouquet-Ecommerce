import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySleevesComponent } from './inventory-sleeves.component';

describe('InventorySleevesComponent', () => {
  let component: InventorySleevesComponent;
  let fixture: ComponentFixture<InventorySleevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventorySleevesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventorySleevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
