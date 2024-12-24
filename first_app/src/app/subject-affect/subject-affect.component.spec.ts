import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAffectComponent } from './subject-affect.component';

describe('SubjectAffectComponent', () => {
  let component: SubjectAffectComponent;
  let fixture: ComponentFixture<SubjectAffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectAffectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectAffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
