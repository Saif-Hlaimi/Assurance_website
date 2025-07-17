export interface Utilisateur {
  userId: number;
  nom: string;
  prenom: string;
  email: string;
  motDePasse: string;
  adresse: string;
  numeroTelephone: string;
  dateNaissance: Date;
  etatCivil: EtatCivil;
  sexe: Sexe;
  code: Code;
}

export interface Code {
  codeAdherent: string;
  // Add other fields from Code class if needed
}

export enum EtatCivil {
  Celibataire = 'celibataire',
  Marie = 'marie',
  Divorce = 'divorce',
  VeufVeuve = 'veuf_veuve'
}

export enum Sexe {
  Homme = 'homme',
  Femme = 'femme'
}
