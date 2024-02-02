export interface IAcaoFuncionalidade {
    id?: number;
    icone?: string;
    nmAcaoFuncionalidade?: string;
    link?: string;
  }
  
  export class AcaoFuncionalidade implements IAcaoFuncionalidade {
    constructor(public id?: number, public icone?: string, public nmAcaoFuncionalidade?: string, public link?: string) {}
  }
  