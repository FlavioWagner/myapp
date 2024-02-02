import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../../../environments/environment';

export const authCodeFlowConfig: AuthConfig = {
  responseType: 'code',
  scope: 'openid profile email',
  redirectUri: environment.api,
  oidc: true,
  requestAccessToken: true,
  showDebugInformation: true,
  strictDiscoveryDocumentValidation: false,
  useSilentRefresh: true,
  issuer: environment.keycloak,
  clientId: environment.clientId,
};