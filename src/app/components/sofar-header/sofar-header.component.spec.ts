import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SofarHeaderComponent } from './sofar-header.component';

describe('SofarHeaderComponent', () => {
  let component: SofarHeaderComponent;
  let fixture: ComponentFixture<SofarHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SofarHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SofarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
