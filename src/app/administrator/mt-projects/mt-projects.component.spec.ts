import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtProjectsComponent } from './mt-projects.component';

describe('MtProjectsComponent', () => {
  let component: MtProjectsComponent;
  let fixture: ComponentFixture<MtProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
