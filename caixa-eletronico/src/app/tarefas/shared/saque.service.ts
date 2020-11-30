import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


import { Saque } from './saque.model';

@Injectable({
  providedIn: 'root'
})
export class SaqueService {

  baseURL = `${environment.mainUrlAPI}saque`;

  constructor( private http: HttpClient ) { }

  saque(saque: Saque): Observable<Saque> {
    return this.http.post<Saque>(this.baseURL, saque);
  }

}
