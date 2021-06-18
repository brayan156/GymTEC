import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

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
  constructor(private router: Router, private service:ClienteService) {
  }

  ngOnInit(): void {

  }

  login() {
    console.log("el cliente", this.usuario.correo, this.usuario.password);
    this.service.login(this.usuario.password, this.usuario.correo).subscribe(resp => {
      if (resp.length != 0) { this.router.navigateByUrl("/inicio"); this.service.user = resp.pop()! }
      else {alert("Sus datos son incorrectos.")};
    })
    
  }

  showPassword() {
    if (this.myPassword.nativeElement.type === "password") {
      this.myPassword.nativeElement.type = "text";
    } else {
      this.myPassword.nativeElement.type = "password";
    }
  }

}
