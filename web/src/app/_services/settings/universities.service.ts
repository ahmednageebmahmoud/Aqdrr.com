import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {
	baseUrl = environment.ApiUrl ;
	universitiesUrl = `${this.baseUrl}universities`;

	constructor(private http: HttpClient) { }


	getUniversity(id: number): Observable<any> {
		return this.http.get<any>(`${this.universitiesUrl}/${id}`);
  }
  
  getUniversitiesAsList(): Observable<KeyValuePairResource[]> {
    return this.http.get<KeyValuePairResource[]>(`${this.universitiesUrl}/list`);
  }
	
}
