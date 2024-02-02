
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from './../../app.constants';
import { ICargoModel } from './cargo.model';

type EntityResponseType = HttpResponse<ICargoModel>;
type EntityArrayResponseType = HttpResponse<ICargoModel[]>;

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  public resourceUrl = /*SERVER_API_URL +*/ 'http://localhost:8081/api/cargos';

  constructor(protected http: HttpClient) {}

  create(model: ICargoModel): Observable<EntityResponseType> {
    return this.http.post<ICargoModel>(this.resourceUrl, model, { observe: 'response' });
  }

  update(model: ICargoModel): Observable<EntityResponseType> {
    return this.http.put<ICargoModel>(this.resourceUrl, model, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  findOne(id: number): Observable<EntityResponseType> {
    return this.http.get<ICargoModel>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  findAll(): Observable<EntityArrayResponseType> {
    return this.http.get<ICargoModel[]>(`${this.resourceUrl}`, { observe: 'response' });
  }  

}
