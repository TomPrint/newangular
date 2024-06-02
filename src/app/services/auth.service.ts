import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Userdata } from '../models/userdata';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { 
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
}

