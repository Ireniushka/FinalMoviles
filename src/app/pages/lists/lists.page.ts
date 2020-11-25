import { Component, OnInit } from '@angular/core';
import { studentsI } from 'src/app/models/students.interface';
import { StudentsService } from 'src/app/services/students.service';
import { isWithinInterval } from 'date-fns';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {

  todos: studentsI[];
  startDate;
  endDate;
  constructor(private todoService: StudentsService) {}
  
  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

  loadResults() {
    const startDate = new Date(this.startDate);
    const endDate = new Date(this.endDate);

    this.todos = this.todos.filter(item => {
      return isWithinInterval(new Date(item.Dia), {start: startDate, end: endDate})
    })
  }
}
