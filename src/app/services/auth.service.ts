import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, authState, User } from '@angular/fire/auth';
import { Userdata } from '../models/userdata';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) {
    authState(this.auth).subscribe((user: User | null) => {
      if (user) {
        console.log("User is logged in", user);
      } else {
        console.log("No user logged in");
      }
    });
  }

  async login(userData: Userdata): Promise<void> {
    try {
      await signInWithEmailAndPassword(this.auth, userData.email, userData.password);
      console.log('Login successful');
    } catch (error) {
      console.error('Login error', error);
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      console.log('Logged out successfully');
    } catch (error) {
      console.error('Logout error', error);
      throw error;
    }
  }

  isLoggedIn(): Observable<boolean> {
    return authState(this.auth).pipe(
      map((user: User | null) => !!user)
    );
  }
}
