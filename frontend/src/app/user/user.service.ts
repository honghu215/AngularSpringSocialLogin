import { TokenStorageService } from './../auth/token-storage.service';
import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { User } from '../auth/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private user: User;

    constructor(private auth: AuthService, private tokenStorage: TokenStorageService) {}

    saveUserProfile() {
        this.auth.getUserProfile().subscribe(
            data => {
                console.log(data);
                this.tokenStorage.saveUsername(data.name);
                this.tokenStorage.saveEmail(data.email);
                this.tokenStorage.saveAuthority(data.role);
                this.tokenStorage.saveImageUrl(data.imageUrl);
            },
            error => {
                console.log(error);
            }
        );
    }
}