import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsettingsdialogComponent } from './accountsettingsdialog.component';

describe('AccountsettingsdialogComponent', () => {
  let component: AccountsettingsdialogComponent;
  let fixture: ComponentFixture<AccountsettingsdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsettingsdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsettingsdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
