import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullyEndTransactionComponent } from './successfully-end-transaction.component';

describe('SuccessfullyEndTransactionComponent', () => {
  let component: SuccessfullyEndTransactionComponent;
  let fixture: ComponentFixture<SuccessfullyEndTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfullyEndTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfullyEndTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
