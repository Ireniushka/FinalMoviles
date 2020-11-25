import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  Jbool = false;
  Ibool = false;
  Nbool = false;
  id = 'admin';
  fecha: string;
  x: any;
  constructor( private student: StudentsService){ }

  options = {
    canBackwardsSelected: true,
  };

  getAlumn(){
    this.student.getTodo(this.id).subscribe(res => {
      if ( res.Dia === this.fecha ){
        this.x = res.Falta;
        if (res.Falta === 'Justificada'){
          this.Jbool = true;
          this.Ibool = false;
          this.Nbool = false;
        }
        else if (res.Falta === 'Injustificada'){
          this.Jbool = false;
          this.Ibool = true;
          this.Nbool = false;
        }
        else{
          this.Jbool = false;
          this.Ibool = false;
          this.Nbool = true;
        }
      }
      else{
        this.x = 'No se ha encontrado resultado';
      }
    });
  }

  onChange($event){
    this.x = '';
    this.fecha = $event.format('YYYY-MM-DD');
    this.getAlumn();
  }

  update($event){
    console.log($event);
    // objeto 
    // this.student.updateTodo(,this.id)
  }

  ngOnInit() {
  }

}
