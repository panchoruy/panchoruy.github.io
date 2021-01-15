import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrogreensComponent } from './microgreens.component';

describe('MicrogreensComponent', () => {
  let component: MicrogreensComponent;
  let fixture: ComponentFixture<MicrogreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrogreensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrogreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
