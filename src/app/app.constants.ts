// These constants are injected via webpack environment variables.
// You can add more variables in webpack.common.js or in profile specific webpack.<dev|prod>.js files.
// If you change the values in the webpack config files, you need to re run webpack to update the application

import { AuthConfig } from "angular-oauth2-oidc";
import { environment } from "../environments/environment";

export const VERSION = environment.version;
export const SERVER_API_URL = environment.api;


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