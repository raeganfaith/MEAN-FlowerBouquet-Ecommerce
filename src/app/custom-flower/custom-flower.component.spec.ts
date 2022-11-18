import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFlowerComponent } from './custom-flower.component';

describe('CustomFlowerComponent', () => {
  let component: CustomFlowerComponent;
  let fixture: ComponentFixture<CustomFlowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomFlowerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFlowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
