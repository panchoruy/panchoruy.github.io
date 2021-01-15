import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMicrogreenEntryComponent } from './new-microgreen-entry.component';

describe('NewMicrogreenEntryComponent', () => {
  let component: NewMicrogreenEntryComponent;
  let fixture: ComponentFixture<NewMicrogreenEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMicrogreenEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMicrogreenEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
