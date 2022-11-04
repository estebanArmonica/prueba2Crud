import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Baraja } from '../interfaces/baraja';
import { BarajaGwent } from '../interfaces/baraja-gwent';

@Injectable({
  providedIn: 'root'
})
export class ApiGwentServiceService {

  constructor(private http: HttpClient) { }

  listarCartasGwent():Observable<BarajaGwent>{
    return this.http.get<BarajaGwent>(`${environment.apiURL}/baraja`)
  }

  crearBarajaNueva(newBarajaGwent: Baraja):Observable<Baraja>{
    return this.http.post<Baraja>(`${environment.apiURL}/baraja`, newBarajaGwent)
  }

  getCartaId(id: number):Observable<BarajaGwent>{
    return this.http.get<BarajaGwent>(`${environment.apiURL}/baraja/?id=${id}`)
  }

  actualizarGwentCarta(gwentActu: any): Observable<BarajaGwent>{
    return this.http.put<BarajaGwent>(`${environment.apiURL}/baraja/${gwentActu.id}`, gwentActu)
  }

  eliminarCartaGwentSuciaId(gwentEli: any):Observable<BarajaGwent>{
    return this.http.delete<BarajaGwent>(`${environment.apiURL}/baraja/${gwentEli.id}`)
  }
}
