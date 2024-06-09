import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from '@angular/fire/auth';
import { Userdata } from '../models/userdata';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = signal(false);

  constructor(private auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      this.isAuthenticated.set(!!user);
    });
  }

  async login(userData: Userdata): Promise<void> {
    try {
      const result = await signInWithEmailAndPassword(this.auth, userData.email, userData.password);
      console.log('Login successful', result);
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

  getIsAuthenticated(): boolean {
    return this.isAuthenticated();
  }
}
