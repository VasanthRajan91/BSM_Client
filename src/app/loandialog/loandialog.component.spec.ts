import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoandialogComponent } from './loandialog.component';

describe('LoandialogComponent', () => {
  let component: LoandialogComponent;
  let fixture: ComponentFixture<LoandialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoandialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoandialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
