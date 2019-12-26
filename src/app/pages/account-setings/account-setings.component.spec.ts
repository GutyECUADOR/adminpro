import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSetingsComponent } from './account-setings.component';

describe('AccountSetingsComponent', () => {
  let component: AccountSetingsComponent;
  let fixture: ComponentFixture<AccountSetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
