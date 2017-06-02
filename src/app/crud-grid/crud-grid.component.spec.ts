import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudGridComponent } from './crud-grid.component';

describe('CrudGridComponent', () => {
  let component: CrudGridComponent;
  let fixture: ComponentFixture<CrudGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
