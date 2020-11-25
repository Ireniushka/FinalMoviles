import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPageRoutingModule } from './calendar-routing.module';
import { ComponentsModule } from '../../components/components.module';

import { CalendarPage } from './calendar.page';

import { CalendarModule } from 'ion2-calendar';

import { StudentsService } from '../../services/students.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    CalendarModule,
    ComponentsModule
  ],
  declarations: [CalendarPage]
})
export class CalendarPageModule {
}
