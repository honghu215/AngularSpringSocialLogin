import { FlexLayoutModule } from '@angular/flex-layout';
import { UserService } from 'src/app/user/user.service';
import { AuthService } from './../auth.service';
import { TokenStorageService } from './../token-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user.model';


@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  token: string;
  user: User;

API_BASE_URL = 'http://localhost:8080';


OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';

GOOGLE_AUTH_URL = this.API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + this.OAUTH2_REDIRECT_URI;
FACEBOOK_AUTH_URL = this.API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + this.OAUTH2_REDIRECT_URI;
GITHUB_AUTH_URL = this.API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + this.OAUTH2_REDIRECT_URI;


  constructor(private tokenStorage: TokenStorageService,
              private router: Router,
              private auth: AuthService,
              private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {

  }

}
