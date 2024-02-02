
export interface ICargoModel {
    id?: string;
    idkcloakUsrLogado?: string;
    sgCargo?: string;
    nmCargo?: string;
    inAtivo?: string;
    inExecutivo?: string;
    dsCompetencia?: string;
    inExcluido?: string;
    nuOrdem?: string;
    tipoCargoId?: string;
    tipoCargoNm?: string;
    conselhoId?: string;
    sgUf?: string;
    cargoEstruturaOrganizacionals?: string;
    justificativaAtivacao?: string;
    cargos?: string;
}

export class CargoModel implements ICargoModel{
  constructor(public id?: string,
              public idkcloakUsrLogado?: string,
              public sgCargo?: string,
              public nmCargo?: string,
              public inAtivo?: string,
              public inExecutivo?: string,
              public dsCompetencia?: string,
              public inExcluido?: string,
              public nuOrdem?: string,
              public tipoCargoId?: string,
              public tipoCargoNm?: string,
              public conselhoId?: string,
              public sgUf?: string,
              public cargoEstruturaOrganizacionals?: string,
              public justificativaAtivacao?: string,
              public cargos?: string){}
}
