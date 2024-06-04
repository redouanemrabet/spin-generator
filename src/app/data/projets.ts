export interface Project {
  name: String;
  date: String;
  devise: String;
  pivotModel: String;
  pivotSociete: String;
}
export const projects: Project[] = [
  {
    name: "CEMAC",
    date: new Date("2024-06-04").toISOString().split('T')[0],
    devise: "XAF",
    pivotModel: "C:/files/pivot_modele_cemac.txt",
    pivotSociete: "C:/files/pivot_societe_cemac.txt"
  },
  {
    name: "BAM",
    date: new Date("2024-06-12").toISOString().split('T')[0],
    devise: "MAD",
    pivotModel: "C:/files/pivot_modele_bam.txt",
    pivotSociete: "/BAM/societe/pivot_societe.txt"
  }
];
