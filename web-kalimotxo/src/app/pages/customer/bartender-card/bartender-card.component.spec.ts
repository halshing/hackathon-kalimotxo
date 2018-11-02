import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BartenderCardComponent } from './bartender-card.component';

describe('BartenderCardComponent', () => {
  let component: BartenderCardComponent;
  let fixture: ComponentFixture<BartenderCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BartenderCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BartenderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
