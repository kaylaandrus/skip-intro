import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingServicesComponent } from './streaming-services.component';

describe('StreamingServicesComponent', () => {
  let component: StreamingServicesComponent;
  let fixture: ComponentFixture<StreamingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamingServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
