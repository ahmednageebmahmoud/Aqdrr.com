import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  baseUrl = environment.ApiUrl ;
	skillsUrl = `${this.baseUrl}skills`;

	constructor(private http: HttpClient) { }

	getSkill(id: number): Observable<any> {
		return this.http.get<any>(`${this.skillsUrl}/${id}`);
  }
  
  getSkillsAsList(): Observable<KeyValuePairResource[]> {
    return this.http.get<KeyValuePairResource[]>(`${this.skillsUrl}/list`);
  }
	
}
