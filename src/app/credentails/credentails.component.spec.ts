import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentailsComponent } from './credentails.component';

describe('CredentailsComponent', () => {
  let component: CredentailsComponent;
  let fixture: ComponentFixture<CredentailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredentailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
