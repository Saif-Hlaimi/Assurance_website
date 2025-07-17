import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouverAgencesComponent } from './trouver-agences.component';

describe('TrouverAgencesComponent', () => {
  let component: TrouverAgencesComponent;
  let fixture: ComponentFixture<TrouverAgencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrouverAgencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrouverAgencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
