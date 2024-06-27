import { Component, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; 

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 

declare var pannellum: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule 
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('panoramaContainer') panoramaContainer!: ElementRef;

  constructor(private authService: AuthService, private router: Router) {}

  ngAfterViewInit(): void {
    pannellum.viewer(this.panoramaContainer.nativeElement, {
      type: "equirectangular",
      panorama: "/assets/360image.jpg",
      autoLoad: true
    });
  }

  logout(): void {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    }).catch(error => {
      console.error('Logout Failed', error);
    });
  }
}
