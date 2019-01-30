import { AuthService } from './../auth/auth.service';
import { TokenStorageService } from './../auth/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: string;
  email: string;
  imageUrl: string;
  constructor(private storage: TokenStorageService, private auth: AuthService) { }

  ngOnInit() {
    this.name = this.storage.getUsername();
    this.email = this.storage.getEmail();
    this.imageUrl = this.storage.getImageUrl();
    this.auth.authChange.next(true);
  }

}
