import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginobj= {
    'username': '',
    'password': ''
  };

  http= inject(HttpClient)
  router = inject(Router)

  onLogin() {
    this.http.post("http://localhost:3000/login", this.loginobj).subscribe(
      (res:any)=> {
      if(res.accessToken) {
        localStorage.setItem('accessToken', res.accessToken)
        this.router.navigateByUrl('dashboard')
      } else {
        console.log(res.message)
      }
    }
  )
  }
}
