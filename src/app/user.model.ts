// user.model.ts

export class User {
  constructor(
    public userId: number,
    public nom: string,
    public prenom: string,
    public email: string,
    public motDePasse: string,
    public adresse: string,
    public numeroTelephone: string,
    public dateNaissance: Date,
    public etatCivil: 'celibataire' | 'marie' | 'divorce' | 'veuf_veuve',
    public sexe: 'homme' | 'femme',
    public code?: Code
  ) {}
}

export class Code {
  constructor(
    public codeId: number,
    public description: string
  ) {}
}
