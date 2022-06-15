import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSampleComponent } from './text-sample.component';

describe('TextSampleComponent', () => {
  let component: TextSampleComponent;
  let fixture: ComponentFixture<TextSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
