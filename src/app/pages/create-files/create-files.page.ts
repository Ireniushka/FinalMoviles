import { Component, OnInit } from '@angular/core';
import { studentsI } from 'src/app/models/students.interface';

// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
// import { studentsI } from 'src/app/models/students.interface';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-create-files',
  templateUrl: './create-files.page.html',
  styleUrls: ['./create-files.page.scss'],
})
export class CreateFilesPage implements OnInit {
  date = new Date();
  description;

  student: studentsI;

  // private Collection: AngularFirestoreCollection<studentsI>;
  // private todos: Observable<studentsI[]>;
  // private db: AngularFirestore;

  private service: StudentsService;

  constructor() { }

  ngOnInit() {
  }

  addFile(){
    /*this.student = {id: 8, // El signo ? es porque se trata de un atributo opcional
      Actividad: this.description,
      Dia: this.date};
    this.service.addTodo(student);*/
  }
}
