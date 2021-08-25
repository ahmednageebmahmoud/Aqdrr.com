import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeyValueChildsPairResource, KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';

@Injectable({
  providedIn: 'root'
})
export class EducationDegreesService {
  baseUrl = environment.ApiUrl;
  educationDegreesUrl = `${this.baseUrl}educationDegrees`;

  constructor(private http: HttpClient) { }
  
  getEducationDegreesAsList(): Observable<KeyValueChildsPairResource[]> {
    return this.http.get<KeyValueChildsPairResource[]>(`${this.educationDegreesUrl}/list`);
  }

  getCertificatesAsList(): Observable<KeyValuePairResource[]> {
    return this.http.get<KeyValuePairResource[]>(`${this.educationDegreesUrl}/Certificates/list`);
  }
}
