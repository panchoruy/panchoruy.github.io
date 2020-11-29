import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuToolbarComponent } from './menu-toolbar.component';

describe('MenuToolbarComponent', () => {
  let component: MenuToolbarComponent;
  let fixture: ComponentFixture<MenuToolbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
