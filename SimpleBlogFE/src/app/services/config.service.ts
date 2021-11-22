import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../models/Config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = 'assets/config.json';

  constructor(private _http: HttpClient) { }

  getConfig() {
    return this._http.get<Config>(this.configUrl);
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this._http.get<Config>(
      this.configUrl, { observe: 'response' });
  }
}
