import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingTeamsComponent } from './loading-teams.component';

describe('LoadingTeamsComponent', () => {
  let component: LoadingTeamsComponent;
  let fixture: ComponentFixture<LoadingTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
