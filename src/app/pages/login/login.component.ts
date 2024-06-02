import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Userdata } from '../../models/userdata';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

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
    MatSnackBarModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userData: Userdata = { email: '', password: '' }; 

  constructor(private authService: AuthService, private snackBar: MatSnackBar) {} 

  onSubmit() {
    this.authService.login(this.userData)
      .then(() => {
        this.snackBar.open('Login successful!', 'Close', { duration: 2000 });
      })
      .catch(error => {
        this.snackBar.open('Login failed: Email or Password Incorrect', 'Close', { duration: 2000 });
      });
  }
}


