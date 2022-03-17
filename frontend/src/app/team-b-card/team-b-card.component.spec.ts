import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBCardComponent } from './team-b-card.component';

describe('TeamBCardComponent', () => {
  let component: TeamBCardComponent;
  let fixture: ComponentFixture<TeamBCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
