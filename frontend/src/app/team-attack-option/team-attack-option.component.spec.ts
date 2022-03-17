import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAttackOptionComponent } from './team-attack-option.component';

describe('TeamAttackOptionComponent', () => {
  let component: TeamAttackOptionComponent;
  let fixture: ComponentFixture<TeamAttackOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamAttackOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAttackOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
