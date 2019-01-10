import { Jur } from './juridico.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class JuridicoService {
  juridicoUrl = 'localhost:5000/api/juridico';
  retorno: any;

  constructor(private http: HttpClient) { }

  inserir(jurid: Jur) {
   this.http.post(this.juridicoUrl, JSON.stringify(jurid));
   alert(JSON.stringify(jurid).toString);

   this.retorno = JSON.stringify(jurid).toString;
  }
}
