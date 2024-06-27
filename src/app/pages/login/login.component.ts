import { Component } from '@angular/core';
import { Userdata } from '../../models/userdata';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Angular Material Imports
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar'; 



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatToolbarModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userData: Userdata = { email: '', password: '' }; 

  constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router) {} 

  onSubmit() {
    this.authService.login(this.userData)
      .then(() => {
        this.snackBar.open('Login successful!', 'Close', { duration: 5000 });
        this.router.navigate(['/']);
      })
      .catch(error => {
        this.snackBar.open('Login failed: Email or Password Incorrect', 'Close', { duration: 5000 });
        console.error(error);
      });
  }
}


