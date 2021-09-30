import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private env = 'http://127.0.0.1:3000';
  constructor(private http: HttpClient ) {}

  getContractsStarted() {
      return this.http.get<any>(`${this.env}/start`).toPromise();
  }
  getContractsTerminated() {
    return this.http.get<any>(`${this.env}/end`).toPromise();
}
}
