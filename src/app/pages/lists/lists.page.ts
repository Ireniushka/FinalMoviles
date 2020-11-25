import { Component, OnInit } from '@angular/core';
import { studentsI } from 'src/app/models/students.interface';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {

  todos: studentsI[];
  constructor(private todoService: StudentsService) {}
  
  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }
}
