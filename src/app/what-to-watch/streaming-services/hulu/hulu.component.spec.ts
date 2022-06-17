import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuluComponent } from './hulu.component';

describe('HuluComponent', () => {
  let component: HuluComponent;
  let fixture: ComponentFixture<HuluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuluComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
