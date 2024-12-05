import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupObj = {
    'username': '',
    'password': ''
  };

  http = inject(HttpClient);
  router = inject(Router);

  onSignup() {
    this.http.post("http://localhost:3000/signup", this.signupObj).subscribe(
      (res: any) => {
        console.log(res)
        if (res && res._id) {
          console.log('Signup successful');
          this.router.navigateByUrl('login');
        } else {
          console.log(res.message);
        }
      },
      (error: any) => {
        console.error('Error during signup:', error);
      }
    );
  }
}
