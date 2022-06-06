import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonprimeComponent } from './amazonprime.component';

describe('AmazonprimeComponent', () => {
  let component: AmazonprimeComponent;
  let fixture: ComponentFixture<AmazonprimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonprimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonprimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
