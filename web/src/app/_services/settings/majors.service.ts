import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeyValueChildsPairResource } from 'src/app/_models/data/key-value-pair-resource';


@Injectable({
  providedIn: 'root'
})
export class MajorsService {
  baseUrl = environment.ApiUrl;
  majorsUrl = `${this.baseUrl}majors`;

  constructor(private http: HttpClient) { }

  getMajorsAsList(): Observable<KeyValueChildsPairResource[]> {
    return this.http.get<KeyValueChildsPairResource[]>(`${this.majorsUrl}/list`);
  }

}
