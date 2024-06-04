import { ClientDto } from "../services/generated/referentiel-api/models";

export const clients: ClientDto[] = [
  {
    id: 1,
    nomRaisonSocial: "Client 1",
    prenom: "Prénom 1",
    adresseClient: {
      // Les détails de l'adresse
    },
    // Les autres propriétés du client
  },
  {
    id: 2,
    nomRaisonSocial: "Client 2",
    prenom: "Prénom 2",
    adresseClient: {
      // Les détails de l'adresse
    },
    // Les autres propriétés du client
  },
  {
    id: 3,
    nomRaisonSocial: "Client 3",
    prenom: "Prénom 3",
    adresseClient: {
      // Les détails de l'adresse
    },
    // Les autres propriétés du client
  }
];

// Vous devrez remplir les détails des adresses et les autres propriétés selon vos besoins.
