import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { studentsI } from '../../models/students.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  Jbool = false;
  Ibool = false;
  Nbool = false;
  id: string;
  fecha: string;
  falta: any;
  act: string;

  constructor( private student: StudentsService, private authservice: AuthService){ }

  options = {
    canBackwardsSelected: true,
  };

  getAlumn(){
    console.log(this.id);
    this.student.getTodo(this.id).subscribe(res => {
      if ( res.Dia === this.fecha ){
        this.falta = res.Falta;
        this.act = res.Actividad;
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
        this.falta = 'No se ha encontrado resultado';
      }
    });
  }

  onChange($event){
    this.falta = '';
    this.fecha = $event.format('YYYY-MM-DD');
    this.getAlumn();
  }

  update($event){
    let stu: studentsI;
    stu = {Actividad: this.act, Dia: this.fecha, Falta: $event};
    this.student.updateTodo(stu, this.id);
    this.getAlumn();
  }

  ngOnInit() {
    this.authservice.getUserAuth().subscribe(user => this.id = user.uid);
  }

}
