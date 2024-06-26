export const AppMenuTree = [
  {
    menu: 'dashboard',
    path: '/dashboard',
    label: 'Accueil',
    authority: 'DASHBOARD_ROLE',
    items: [
      {
        icon: 'fas fa-tachometer-alt',
        label: 'Accueil',
        path: '/dashboard',
      },
    ],
  },
  {
    menu: 'task',
    path: '/task',
    label: 'Projets',
    authority: 'TASKS_ROLE',
    items: [
      {
        icon: 'fas fa-briefcase',
        label: 'Projets',
        path: '/task/list',
      },
    ],
  },
  {
    menu: 'setting',
    path: '/setting',
    label: 'Utilisateurs',
    authority: 'SETTING_ROLE',
    items: [
      {
        icon: 'fas fa-users',
        label: 'Utilisateurs',
        path: '/setting/setting',
      },
    ],
  },
  {
    menu: 'onboarding',
    path: '/onboarding',
    label: 'Fichiers Générés',
    authority: 'SETTING_ROLE',
    items: [
      {
        icon: 'fas fa-file-export',
        label: 'Générer un ',
        path: '/onboarding/create-simulation',
      },
      {
        icon: 'fas fa-table-list',
        label: 'Liste des Attributs',
        path: '/onboarding/list-simulation',
      },
      {
        icon: 'fas fa-list',
        label: 'Liste des Comptes & Domaines',
        path: '/onboarding/demand-list',
      },
    ],
  },
]
