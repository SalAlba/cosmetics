import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPloicyComponent } from './privacy-ploicy.component';

describe('PrivacyPloicyComponent', () => {
  let component: PrivacyPloicyComponent;
  let fixture: ComponentFixture<PrivacyPloicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyPloicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPloicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
