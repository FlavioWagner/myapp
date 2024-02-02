import { IMenu } from "../../shared/model/central-seguranca/menu.model";
export class Account {
  constructor(
    public activated: boolean,
    public authorities: string[],
    public email: string,
    public firstName: string,
    public langKey: string,
    public lastName: string,
    // public login: string,
    public imageUrl: string,
    public nmPerfil: string,
    public idConselho: number,
    public sgUf: string,
    public menus: IMenu[],
    public perfis: string[],
    public cpf: string
  ) {}

  isAdmin(): boolean {
    return this.authorities?.includes('admin');
  }
}
