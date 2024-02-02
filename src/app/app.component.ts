import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MenuComponent } from './layouts/sidemenu/menu/menu.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MainComponent } from './layouts/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './core/auth/auth.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './core/auth/auth.config';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    HttpClientModule,
    ToastModule,
    MainComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService,AuthService]
})
export class AppComponent {
  title = 'My-app';

  constructor(//private oauthService: OAuthService,
    private oauthService: AuthService) {
    this.oauthService.initAuth()
    /*
this.oauthService.configure(authCodeFlowConfig);
this.oauthService.loadDiscoveryDocumentAndLogin();

//this.oauthService.setupAutomaticSilentRefresh();

// Automatically load user profile
this.oauthService.events
.pipe(filter((e) => e.type === 'token_received'))
.subscribe((_) => this.oauthService.loadUserProfile());
}

get userName() {
const claims = this.oauthService.getIdentityClaims();
if (!claims) return null;
return claims['given_name'];
}

get idToken(): string {
return this.oauthService.getIdToken();
}

get accessToken(): string {
return this.oauthService.getAccessToken();
}

refresh() {
this.oauthService.refreshToken();
}*/
  }
}