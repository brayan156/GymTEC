import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.component.html',
  styleUrls: ['./crear-clase.component.css']
})
export class CrearClaseComponent implements OnInit {

  tiposClase = [
    {
      tipo: "Indoor Cycling"
    },
    {
      tipo: "Pilates"
    },
    {
      tipo: "Yoga"
    },
    {
      tipo: "Zumba"
    },
    {
      tipo: "Natación"
    }
  ];

  clase = {
    tipo: "",
    instructor: "",
    grupal: false,
    capacidad: 0,
    fecha: "",
    inicio: "",
    final: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

  crearClase() {
    console.log(this.clase);
  }
}
