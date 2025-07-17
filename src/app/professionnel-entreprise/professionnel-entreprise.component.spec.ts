import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionnelEntrepriseComponent } from './professionnel-entreprise.component';

describe('ProfessionnelEntrepriseComponent', () => {
  let component: ProfessionnelEntrepriseComponent;
  let fixture: ComponentFixture<ProfessionnelEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionnelEntrepriseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionnelEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
