import { SignUpInfo } from './signup/signup-info';
import { AuthLoginInfo } from './login/login-info';
import { TokenStorageService } from './token-storage.service';
import { User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    authChange = new Subject<boolean>();
    baseUrl = 'http://qcalumni.eastus.cloudapp.azure.com';
    authError = new Subject<string>();

    constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {}

    getUserProfile(): Observable<any> {
        return this.http.get<any>(this.baseUrl + '/user/me', httpOptions);
    }

    attempAuth(credentials: AuthLoginInfo): Observable<any> {
        return this.http.post<any>(this.baseUrl + '/auth/login', credentials, httpOptions);
    }

    signUp(info: SignUpInfo): Observable<any> {
        return this.http.post<any>(this.baseUrl + '/auth/signup', info, httpOptions);
    }

    logout() {
        this.authChange.next(false);
        this.tokenStorage.logout();
    }

}
