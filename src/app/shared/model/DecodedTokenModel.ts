export class DecodedTokenModel {
    exp?: number;
    iat?: number;
    auth_time?: number;
    jti?: string;
    iss?: string;
    aud?: string[];
    sub?: string;
    typ?: string;
    azp?: string;
    nonce?: string;
    session_state?: string;
    acr?: string;
    allowed_origins?: string[];
    realm_access?: RealmAccess;
    resource_access?: { [key: string]: ResourceAccess };
    scope?: string;
    sid?: string;
    email_verified?: boolean;
    name?: string;
    groups?: string[];
    attributes?: { [key: string]: string };
    preferred_username?: string;
    given_name?: string;
    login?: Login;
    family_name?: string;
    email?: string;
  }
  
  export class RealmAccess {
    roles?: string[];
  }
  
  export class ResourceAccess {
    roles?: string[];
  }
  
  export class Account {
    roles?: string[];
  }
  
  export class Login {
    identifier?: string;
    type?: string;
  }
  