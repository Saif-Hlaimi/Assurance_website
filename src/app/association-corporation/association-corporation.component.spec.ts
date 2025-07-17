import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationCorporationComponent } from './association-corporation.component';

describe('AssociationCorporationComponent', () => {
  let component: AssociationCorporationComponent;
  let fixture: ComponentFixture<AssociationCorporationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociationCorporationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociationCorporationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
