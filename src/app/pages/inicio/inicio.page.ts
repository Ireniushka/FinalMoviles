import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

  optionsSingle: CalendarComponentOptions = {
    color: 'danger'
  };

  componentes: Componente[] = [
      {
        icon : 'calendar',
        name: 'Calendar',
        redirectTo: '/calendar'
        }
    ];

    date: string;
    type: 'string';

  constructor(private router: Router) { }

  ngOnInit() {
  }


  onChange($event) {
    console.log('Hola');
  }
}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
 }
