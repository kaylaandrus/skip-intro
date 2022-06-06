import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisneyplusComponent } from './disneyplus.component';

describe('DisneyplusComponent', () => {
  let component: DisneyplusComponent;
  let fixture: ComponentFixture<DisneyplusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisneyplusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisneyplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
