import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebmanagementComponent } from './webmanagement.component';

describe('WebmanagementComponent', () => {
  let component: WebmanagementComponent;
  let fixture: ComponentFixture<WebmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebmanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
