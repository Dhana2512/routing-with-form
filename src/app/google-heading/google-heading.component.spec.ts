import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleHeadingComponent } from './google-heading.component';

describe('GoogleHeadingComponent', () => {
  let component: GoogleHeadingComponent;
  let fixture: ComponentFixture<GoogleHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
