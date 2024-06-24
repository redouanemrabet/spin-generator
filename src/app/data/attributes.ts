export interface ProjectAttribute {
  code: string;
  position: number;
  longueur: number;
  valeurParDefaut: string | null;
}



export const projectAttributes: ProjectAttribute[] = [
  { code: "CDSESS", position: 1, longueur: 2, valeurParDefaut: null },
  { code: "CDSCTE", position: 3, longueur: 5, valeurParDefaut: null },
  { code: "CDSSSO", position: 8, longueur: 5, valeurParDefaut: null },
  { code: "CDFILI", position: 13, longueur: 5, valeurParDefaut: null },
  { code: "VLRFCE", position: 18, longueur: 60, valeurParDefaut: null },
  { code: "NOCHRO", position: 78, longueur: 9, valeurParDefaut: null },
  { code: "DTSITU", position: 94, longueur: 8, valeurParDefaut: null },
  { code: "TYENT", position: 102, longueur: 1, valeurParDefaut: null }
];

export default projectAttributes;

export interface Compte{
  code:string;
  libelle:string;
}

export const projectComptes:Compte[]=[
  {code:"871", libelle:"Résultat net de l'exercice"},
  {code:"871C", libelle:"Bénéfice net de l'exercice"},
  {code:"871D", libelle:"Pert net de l'exercice"},
  {code:"875", libelle:"Résultat net en instance d'affectation"},
  {code:"875C", libelle:"Bénéfice net en instance d'affectation"},
  {code:"875D", libelle:"Pert net en instance d'affectation"},
  // {code:"CMTHB", libelle:"Comptes hors bilan"},
  // {code:"CLAEN", libelle:"Engagements reçus des correspondants"},
  // {code:"CLAHB", libelle:"Engagements reçus des correspondants hors bilan"},
  // {code:"CIRTR", libelle:"Circulation transfrontière"},


]

export const projectDomaines:Compte[]=[
  {code:"B040",libelle:"Créances rattachées"},
  {code:"J160", libelle:"Comptes d'encaissement"},
  {code:"J220", libelle:"Rémunérations dues au personnel"},
  {code:"J340", libelle:"Actionnaires, versements anticipés"},
  {code:"R7F0", libelle:"Services consommées"},
  {code:"R7L0", libelle:"Autres services consommées"},
  // {code:"R7M0", libelle:"Moins-values sur cession de participation"},
  // {code:"R8A0", libelle:"Dotations aux amortissements des frais immobilisés"},
  // {code:"R8B0", libelle:"Dotations aux amortissements du matériel"},
  // {code:"S050",libelle:"Interêts sur compte à terme"}
]
