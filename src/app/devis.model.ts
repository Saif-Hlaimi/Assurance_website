// devis.model.ts
export class Devis {
  devisId: number;
  userId: number;
  assuranceId: number;
  dateDevis: Date;
  montant: number;

  constructor(devisId: number, userId: number, assuranceId: number, dateDevis: Date, montant: number) {
    this.devisId = devisId;
    this.userId = userId;
    this.assuranceId = assuranceId;
    this.dateDevis = dateDevis;
    this.montant = montant;
  }
}
