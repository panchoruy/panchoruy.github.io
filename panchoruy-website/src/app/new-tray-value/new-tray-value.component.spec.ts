import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrayValueComponent } from './new-tray-value.component';

describe('NewTrayValueComponent', () => {
  let component: NewTrayValueComponent;
  let fixture: ComponentFixture<NewTrayValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTrayValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrayValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
