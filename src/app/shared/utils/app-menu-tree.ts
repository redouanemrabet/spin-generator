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
        label: 'Rechercher les taches',
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
        label: 'Parametrage global',
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
        icon: 'fas fa-calculator',
        label: 'Nouvelle simulation',
        path: '/onboarding/create-simulation',
      },
      {
        icon: 'fas fa-list',
        label: 'List des simulations',
        path: '/onboarding/list-simulation',
      },
      {
        icon: 'fas fa-spinner',
        label: 'Demandes en cours',
        path: '/onboarding/demand-list',
      },
    ],
  },
]
