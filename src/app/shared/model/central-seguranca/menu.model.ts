import { IMenuFuncionalidade } from '../central-seguranca/menu-funcionalidade.model';
import { MenuAtivo } from '../central-seguranca/enumerations/menu-ativo.model';
import { MenuFiltraFuncionalidade } from '../central-seguranca/enumerations/menu-filtra-funcionalidade.model';
import { MenuNivelApresentacao } from '../central-seguranca/enumerations/menu-nivel-apresentacao.model';
import { MenuTipo } from '../central-seguranca/enumerations/menu-tipo.model';
import { MenuExcluido } from '../central-seguranca/enumerations/menu-excluido.model';

export interface IMenu {
  id?: number;
  idIndexOf?: number;
  idConselho?: number;
  sgUfConselho?: string;
  nmMenu?: string;
  inAtivo?: MenuAtivo;
  dsMenu?: string;
  icone?: string;
  dsInstrucao?: string;
  inFiltraFuncionalidade?: MenuFiltraFuncionalidade;
  inNivelApresentacao?: MenuNivelApresentacao;
  imIconeContentType?: string;
  imIcone?: any;
  nmArquivoImagem?: string;
  inTipoMenu?: MenuTipo;
  inExcluido?: MenuExcluido;
  subMenus?: IMenu[];
  funcionalidades?: IMenuFuncionalidade[];
  nomeFuncionalidade?: string;
  menuAninhadoId?: number;
  nmFuncionalidades?: string;
  nmModulo?: string;
  sistemaId?: number;
  moduloId?: number;
  chave?: string;
  idServico?: number;
  nmServico?: string;
  idFuncionalidade?: number;
}

export class Menu implements IMenu {
  constructor(
    public id?: number,
    public idIndexOf?: number,
    public idConselho?: number,
    public sgUfConselho?: string,
    public nmMenu?: string,
    public inAtivo?: MenuAtivo,
    public dsMenu?: string,
    public icone?: string,
    public dsInstrucao?: string,
    public inFiltraFuncionalidade?: MenuFiltraFuncionalidade,
    public inNivelApresentacao?: MenuNivelApresentacao,
    public imIconeContentType?: string,
    public imIcone?: any,
    public nmArquivoImagem?: string,
    public inTipoMenu?: MenuTipo,
    public inExcluido?: MenuExcluido,
    public subMenus?: IMenu[],
    public funcionalidades?: IMenuFuncionalidade[],
    public nomeFuncionalidade?: string,
    public menuAninhadoId?: number,
    public nmFuncionalidades?: string,
    public nmModulo?: string,
    public sistemaId?: number,
    public moduloId?: number,
    public chave?: string,
    public idServico?: number,
    public nmServico?: string,
    public idFuncionalidade?: number
  ) {}
}
