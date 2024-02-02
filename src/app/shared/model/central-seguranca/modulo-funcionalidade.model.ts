export interface IModuloFuncionalidade {
    id?: number;
    funcionalidadeId?: number;
    nmFuncionalidade?: string;
    acaoFuncionalidadeId?: number;
    moduloId?: number;
  }
  
  export class ModuloFuncionalidade implements IModuloFuncionalidade {
    constructor(
      public id?: number,
      public funcionalidadeId?: number,
      public nmFuncionalidade?: string,
      public acaoFuncionalidadeId?: number,
      public moduloId?: number
    ) {}
  }
  