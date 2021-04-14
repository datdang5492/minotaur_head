import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortDetailComponent } from './short-detail.component';

describe('ShortDetailComponent', () => {
  let component: ShortDetailComponent;
  let fixture: ComponentFixture<ShortDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
