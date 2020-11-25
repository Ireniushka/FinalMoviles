import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'create-files',
    loadChildren: () => import('./pages/create-files/create-files.module').then( m => m.CreateFilesPageModule)
  },
  {
    path: 'create-files/:id',
    loadChildren: () => import('./pages/create-files/create-files.module').then( m => m.CreateFilesPageModule)
  },
  {
    path: 'date-time',
    loadChildren: () => import('./pages/date-time/date-time.module').then( m => m.DateTimePageModule)
  },
  {
    path: 'date-time/:id',
    loadChildren: () => import('./pages/date-time/date-time.module').then( m => m.DateTimePageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'calendar/:id',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'lists',
    loadChildren: () => import('./pages/lists/lists.module').then( m => m.ListsPageModule)
  },
  {
    path: 'create-files',
    loadChildren: () => import('./pages/create-files/create-files.module').then( m => m.CreateFilesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
