import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSleeveComponent } from './custom-sleeve.component';

describe('CustomSleeveComponent', () => {
  let component: CustomSleeveComponent;
  let fixture: ComponentFixture<CustomSleeveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSleeveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSleeveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
