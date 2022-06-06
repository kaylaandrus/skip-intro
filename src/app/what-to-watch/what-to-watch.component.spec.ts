import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatToWatchComponent } from './what-to-watch.component';

describe('WhatToWatchComponent', () => {
  let component: WhatToWatchComponent;
  let fixture: ComponentFixture<WhatToWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatToWatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatToWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
