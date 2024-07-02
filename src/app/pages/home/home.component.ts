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
        "default": {
            "firstScene": "city",
            "author": "Angular Virtual Tour",
            "sceneFadeDuration": 1000
        },
        "scenes": {
            "city": {
                "title": "Sleepy Hollow",
                "hfov": 110,
                "pitch": -3,
                "yaw": 117,
                "type": "equirectangular",
                "panorama": "https://i.imgur.com/7HLdNDE.jpeg",
                "hotSpots": [
                    {
                        "pitch": -4.0,
                        "yaw": 2490.00,
                        "type": "scene",
                        "text": "Hudson River",
                        "sceneId": "river"
                    }
                ]
            },
            "river": {
                "title": "Hudson River",
                "hfov": 110,
                "yaw": 5,
                "type": "equirectangular",
                "panorama": "https://i.imgur.com/mRGAw5K.jpeg",
                "hotSpots": [
                    {
                        "pitch": 0.0,
                        "yaw": 2349.0,
                        "type": "scene",
                        "text": "Sleepy Holow",
                        "sceneId": "city",
                        "targetYaw": -23,
                        "targetPitch": 2
                    }
                ]
            }
        }
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
