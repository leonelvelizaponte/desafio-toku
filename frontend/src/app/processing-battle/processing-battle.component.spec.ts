import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingBattleComponent } from './processing-battle.component';

describe('ProcessingBattleComponent', () => {
  let component: ProcessingBattleComponent;
  let fixture: ComponentFixture<ProcessingBattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessingBattleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
