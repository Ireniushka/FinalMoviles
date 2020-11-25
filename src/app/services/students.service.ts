import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { studentsI } from '../models/students.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private todosCollection: AngularFirestoreCollection<studentsI>;
  private todos: Observable<studentsI[]>;

  constructor(db: AngularFirestore) { 
    this.todosCollection = db.collection<studentsI>('alumnos');
  
    this.todos = this.todosCollection.snapshotChanges().pipe(map(
      actions => { // Esto lo hacemos para iterar sobre todos los documentos
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
      
          return { id, ...data };
        });
      }
    ));
  }
   
  getTodos() {
    return this.todos;
  }

  getTodo(id: string) {
    return this.todosCollection.doc<studentsI>(id).valueChanges();
  }

  updateTodo(todo: studentsI, id: string) {
    return this.todosCollection.doc(id).update(todo);
  }

  addTodo(todo: studentsI) {
    return this.todosCollection.add(todo);
  }
  
  removeTodo(id: string) {
    return this.todosCollection.doc(id).delete();
  }
}



