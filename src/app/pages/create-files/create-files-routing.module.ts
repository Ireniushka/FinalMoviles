import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateFilesPage } from './create-files.page';

const routes: Routes = [
  {
    path: '',
    component: CreateFilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateFilesPageRoutingModule {}
