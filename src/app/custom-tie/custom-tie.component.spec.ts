import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTieComponent } from './custom-tie.component';

describe('CustomTieComponent', () => {
  let component: CustomTieComponent;
  let fixture: ComponentFixture<CustomTieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomTieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
