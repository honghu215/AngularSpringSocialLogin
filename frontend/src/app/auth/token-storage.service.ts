import { Router } from '@angular/router';
import { User } from './user.model';
import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
const EMAIL_KEY = 'UserEmail';
const IMAGE_URL = 'ImageURL';
@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {

    constructor(private router: Router) {}

    public logout() {
        window.sessionStorage.clear();
        this.router.navigate(['/welcome']);
    }
    public saveToken(token: string) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): string {
        return sessionStorage.getItem(TOKEN_KEY);
    }

    public saveUsername(name: string) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, name);
    }

    public getUsername(): string {
        return sessionStorage.getItem(USERNAME_KEY);
    }

    public saveEmail(email: string) {
        window.sessionStorage.removeItem(EMAIL_KEY);
        window.sessionStorage.setItem(EMAIL_KEY, email);
    }

    public getEmail(): string {
        return sessionStorage.getItem(EMAIL_KEY);
    }

    public saveAuthority(role: string) {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, role);
    }

    public getAuthority(): string {
        return sessionStorage.getItem(AUTHORITIES_KEY);
    }

    public saveImageUrl(url: string) {
        window.sessionStorage.removeItem(IMAGE_URL);
        window.sessionStorage.setItem(IMAGE_URL, url);
    }

    public getImageUrl(): string {
        return sessionStorage.getItem(IMAGE_URL);
    }
}
