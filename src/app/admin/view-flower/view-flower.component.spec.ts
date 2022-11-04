import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFlowerComponent } from './view-flower.component';

describe('ViewFlowerComponent', () => {
  let component: ViewFlowerComponent;
  let fixture: ComponentFixture<ViewFlowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFlowerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFlowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
