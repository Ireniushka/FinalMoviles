import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateFilesPageRoutingModule } from './create-files-routing.module';

import { CreateFilesPage } from './create-files.page';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateFilesPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [CreateFilesPage]
})
export class CreateFilesPageModule {}
