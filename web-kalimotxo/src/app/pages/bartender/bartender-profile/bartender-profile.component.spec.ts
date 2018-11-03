import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BartenderProfileComponent } from './bartender-profile.component';

describe('BartenderProfileComponent', () => {
  let component: BartenderProfileComponent;
  let fixture: ComponentFixture<BartenderProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BartenderProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BartenderProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
