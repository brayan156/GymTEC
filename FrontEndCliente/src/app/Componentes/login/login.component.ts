import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    correo: "",
    password: ""
  }

  @ViewChild("myPassword")
  myPassword!: ElementRef;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // const form = document.getElementById('form');
    // form.addEventListener('submit', this.login);
  }

  login() {
    console.log("puta", this.usuario.correo, this.usuario.password);
    this.router.navigateByUrl("/inicio")
  }

  showPassword() {
    if (this.myPassword.nativeElement.type === "password") {
      this.myPassword.nativeElement.type = "text";
    } else {
      this.myPassword.nativeElement.type = "password";
    }
  }

}
