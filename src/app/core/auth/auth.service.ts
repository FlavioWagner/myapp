import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable, of,filter } from 'rxjs';
import { authCodeFlowConfig } from '../../app.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oauthService: OAuthService) { }

  initAuth() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin();    
    //this.oauthService.setupAutomaticSilentRefresh();
  }

  login() {
    this.initAuth();
    //this.oauthService.initCodeFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  isLoggedIn(): Observable<boolean> {
    return of(this.oauthService.hasValidIdToken());
  }

  getAccessToken(): string {
    const accessToken = this.oauthService.getAccessToken();
    return accessToken;
  }
}