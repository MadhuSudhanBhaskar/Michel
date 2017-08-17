import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WViewComponent } from './wview.component';

describe('WViewComponent', () => {
  let component: WViewComponent;
  let fixture: ComponentFixture<WViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
