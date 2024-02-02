import { IAcaoFuncionalidade } from "./acao-funcionalidade.model";

export interface IMenuFuncionalidade {
  id?: number;
  icone?: string;
  nmFuncionalidade?: string;
  acaoFuncionalidades?: IAcaoFuncionalidade[];
  chave?: string;
}

export class MenuFuncionalidade implements IMenuFuncionalidade {
  constructor(
    public id?: number,
    public icone?: string,
    public nmFuncionalidade?: string,
    public menuId?: number,
    public acaoFuncionalidades?: IAcaoFuncionalidade[],
    public chave?: string
  ) {}
}
