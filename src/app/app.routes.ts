import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'task',
    loadChildren: () => import('./features/task/task.module').then((m) => m.TaskModule),
  },
  {
    path: 'setting',
    loadChildren: () => import('./features/setting/setting.module').then((m) => m.SettingModule),
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./features/onboarding/onboarding.module').then((m) => m.OnboardingModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./features/profil/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
]
