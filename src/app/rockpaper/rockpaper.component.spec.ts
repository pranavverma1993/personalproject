import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RockpaperComponent } from './rockpaper.component';

describe('RockpaperComponent', () => {
  let component: RockpaperComponent;
  let fixture: ComponentFixture<RockpaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RockpaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RockpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
