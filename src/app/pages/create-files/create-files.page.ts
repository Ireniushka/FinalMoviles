import { Component, OnInit } from '@angular/core';
import { studentsI } from 'src/app/models/students.interface';

import { StudentsService } from 'src/app/services/students.service';
import { AuthService } from 'src/app/services/auth.service';
import * as moment from 'moment';


@Component({
  selector: 'app-create-files',
  templateUrl: './create-files.page.html',
  styleUrls: ['./create-files.page.scss'],
})
export class CreateFilesPage implements OnInit {
  date = new Date();
  description: string;

  student: studentsI;


  ID: string;


  constructor(private authservice: AuthService, private service: StudentsService) {}

  ngOnInit() {
    this.authservice.getUserAuth().subscribe(user => this.ID = user.uid);
  }

  addFile(){
    let dia = moment(this.date).format('YYYY-MM-DD'); // this.date.toDateString();
    this.student = {id: this.ID,
      Actividad: this.description,
      Dia: dia};
    this.service.addTodo(this.student);
    console.log(this.ID);
  }
}
