import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asociacion-tratamientos',
  templateUrl: './asociacion-tratamientos.component.html',
  styleUrls: ['./asociacion-tratamientos.component.css']
})
export class AsociacionTratamientosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  eliminarTratamiento() {
    let alert = confirm("Press a button!");
    if (alert == true) {
      console.log("You pressed OK!");
    } else {
      console.log("You pressed Cancel!");
    }
  }

}
