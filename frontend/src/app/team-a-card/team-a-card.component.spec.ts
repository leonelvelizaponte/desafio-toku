import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamACardComponent } from './team-a-card.component';

describe('TeamACardComponent', () => {
  let component: TeamACardComponent;
  let fixture: ComponentFixture<TeamACardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamACardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamACardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
