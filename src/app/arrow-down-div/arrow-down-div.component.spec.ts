import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowDownDivComponent } from './arrow-down-div.component';

describe('ArrowDownDivComponent', () => {
  let component: ArrowDownDivComponent;
  let fixture: ComponentFixture<ArrowDownDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowDownDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowDownDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
